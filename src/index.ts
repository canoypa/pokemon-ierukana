class Main {
  nameToId = new Map();
  idToGetDom = new Map();

  answered = [];

  listener = {
    openSettings: () => this.openSettings(),
    answer: e => (e.key === "Enter" ? this.answer(document.getElementById("answer").value) : false),
    speech: e => this.speech(e),
    toggleDareda: () => this.toggleDareda(),
    clearAnswered: () => this.clearAnswered()
  };

  constructor() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("sw.js", { scope: "/pokemon-ierukana/" })
        .then(reg => console.log("ServiceWorker registration successful with scope: ", reg.scope))
        .catch(err => console.log("ServiceWorker registration failed: ", err));
    }

    const df = document.createDocumentFragment();
    this.pokedex.forEach(poke => {
      const pokeDom = new Poke(poke);

      df.appendChild(pokeDom);

      this.idToGetDom.set(poke.id, pokeDom);
      poke.keyword.forEach(key => this.nameToId.set(key, poke.id));
    });
    document.getElementById("poke-list").appendChild(df);

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.showImage();
          observer.unobserve(entry.target);
        }
      });
    });
    this.idToGetDom.forEach(poke => observer.observe(poke));

    const initAnswered = localStorage.getItem("answered");
    if (initAnswered) {
      JSON.parse(initAnswered).forEach(a => {
        this.submit(a);
        this.answered.push(a);
      });
    }

    this.count();
    this.dareda();

    document.getElementById("setting").addEventListener("click", this.listener.openSettings);
    document.getElementById("answer").addEventListener("keydown", this.listener.answer);
    document.getElementById("mic").addEventListener("click", this.listener.speech);
  }

  openSettings() {
    if (!document.getElementById("config-container")) {
      const df = document.createElement("div");
      df.id = "config-container";
      df.innerHTML = `
      <div id="config-curtain"></div>
      <div id="config">
        <div><button id="dareda-mode">Dareda Mode</button></div>
        <div><button id="clear-answered">回答履歴を削除</button></div>
      </div>
      `;

      document.body.appendChild(df);
    }

    document.getElementById("dareda-mode").addEventListener("click", this.listener.toggleDareda);
    document.getElementById("clear-answered").addEventListener("click", this.listener.clearAnswered);

    document.getElementById("config-container").classList.add("active");

    const t = () => document.getElementById("config-container").classList.remove("active");
    document.getElementById("config-curtain").addEventListener("click", t);
  }

  toggleDareda() {
    const dareda = localStorage.getItem("dareda");

    if (!dareda) {
      localStorage.setItem("dareda", true);
    } else if (dareda === "true") {
      localStorage.setItem("dareda", false);
    } else {
      localStorage.setItem("dareda", true);
    }

    this.dareda();
  }

  dareda() {
    const dareda = localStorage.getItem("dareda");

    if (dareda === "true") {
      this.idToGetDom.forEach(poke => {
        poke.classList.add("dareda");
      });
    } else if (dareda === "false") {
      this.idToGetDom.forEach(poke => {
        poke.classList.remove("dareda");
      });
    }
  }

  clearAnswered() {
    localStorage.removeItem("answered");
  }

  showBanner(t = "Hello World!!", imgUrl = "./assets/images/pokemon/1.png") {
    const bannerArea = document.getElementById("banner-area");

    const banner = document.createElement("div");
    banner.classList.add("banner");
    const image = document.createElement("img");
    image.setAttribute("src", imgUrl);
    const text = document.createElement("div");
    text.textContent = t;

    banner.appendChild(image);
    banner.appendChild(text);

    bannerArea.appendChild(banner);

    banner.onanimationend = () => bannerArea.removeChild(banner);
  }

  count() {
    document.getElementById("progress").textContent = `${this.answered.length}/${this.pokedex.length}`;
  }

  answer(value) {
    const id = this.nameToId.get(value);
    if (id && !this.answered.includes(id)) {
      document.getElementById("answer").value = "";
      this.answered.push(id);
      localStorage.setItem("answered", JSON.stringify(this.answered));

      this.submit(id);

      const target = this.idToGetDom.get(id);
      document.getElementById("app").scrollTo({
        top: target.offsetTop - (window.innerHeight - target.offsetHeight) / 2,
        behavior: "smooth"
      });
      this.showBanner(value, `./assets/images/pokemon/${id}.png`);
      this.count();
    }
  }

  submit(id) {
    this.idToGetDom.get(id).active();
    // document.getElementById("progress").textContent = this.answered.length;
  }

  async speech() {
    const result = await this.listenSpeech();

    const nameList = [...this.nameToId.keys()];
    const firstMatchList = [];

    nameList.forEach(v => {
      if (result.includes(v)) firstMatchList.push(v);
    });

    firstMatchList.sort((a, b) => (a.length < b.length ? -1 : 1));

    const find = (m, t) => {
      const r = [];

      const p = m.pop();

      if (t.includes(p)) {
        t = t.replace(p, "");
        r.push(p);
      }

      if (m.length && t.length) {
        r.push(...find(m, t));
      }

      return r;
    };

    const answer = find(firstMatchList, result);
    if (answer.length) while (answer.length) this.answer(answer.pop());
  }

  listenSpeech() {
    return new Promise(resolve => {
      const df = document.createElement("div");
      df.innerHTML = `
        <div class="speech-container">
          <div class="speech-card">
            <div class="speech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
              </svg>
            </div>
            <div class="speech-text">...</div>
          </div>
        </div>
      `;

      const speech = new webkitSpeechRecognition();
      speech.lang = "ja-JP";
      speech.interimResults = true;
      speech.continuous = true;

      speech.addEventListener("result", e => {
        const result = e.results[e.resultIndex];
        const alt = result[0];
        const text = alt.transcript;

        document.querySelector(".speech-text").textContent = text;

        console.log("\n");
        console.log("RESULT:");
        console.log(e);
        console.log(text);
        console.log(result.isFinal);

        if (result.isFinal) {
          speech.stop();
          document.body.removeChild(df);
          resolve(text);
        }
      });

      document.body.appendChild(df);

      speech.start();
    });
  }
}

class Poke extends HTMLElement {
  shadow;

  id;
  name;
  image;

  constructor(poke) {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML = Poke.template();

    this.id = poke.id;
    this.name = poke.name;
    this.image = `./assets/images/pokemon/${poke.id}.png`;

    this.shadow.querySelector(".no").textContent = `No: ${this.id}`;
    this.shadow.querySelector(".img").setAttribute("data-src", this.image);
    this.shadow.querySelector(".img").setAttribute("alt", "");
  }

  showImage() {
    const img = this.shadow.querySelector(".img");
    img.src = img.getAttribute("data-src");
    img.removeAttribute("data-src");
  }

  active() {
    this.shadow.querySelector(".name").textContent = this.name;
    this.classList.add("active");
  }

  static template() {
    return `
    <style>
    :host {
      display: flex;
      align-items: center;
      padding: 16px;
      user-select: none;
    }
    .imgarea {
      width: 64px;
      height: 64px;
      margin-right: 16px;
    }
    .imgbone {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #e0e0e0;
      font-size: 32px;
    }
    :host(.active) .imgbone,
    :host(.dareda) .imgbone {
      display: none;
    }
    .img {
      width: 100%;
      height: 100%;
    }
    :host(:not(.active):not(.dareda)) .img {
      display: none;
    }
    :host(.dareda:not(.active)) .img {
      filter: brightness(0);
    }
    .no,
    .name {
      margin: 4px 0;
    }
    .name {
      width: 6em;
      font-size: 24px;
    }
    </style>
    <div class="imgarea">
      <div class="imgbone">？</div>
      <img class="img">
    </div>
    <div class="primary">
      <p class="no">No: 0</p>
      <p class="name">？？？？</p>
    </div>`;
  }
}

customElements.define("poke-item", Poke);

new Main();
