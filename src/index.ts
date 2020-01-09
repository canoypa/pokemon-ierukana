import pokedex from "./pokedex";
import { pokeInfo } from "./pokedex/types";

class Main {
  nameToId: Map<string, number> = new Map();
  idToGetDom: Map<number, Poke> = new Map();

  answered: number[] = [];

  listener = {
    openSettings: () => this.openSettings(),
    answer: (event: KeyboardEvent) => this.input(event),
    speech: () => this.speech(),
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

    const pokeList = <HTMLDivElement>document.getElementById("poke-list");
    const df = document.createDocumentFragment();
    pokedex.forEach(poke => {
      const pokeDom = new Poke(poke);

      df.appendChild(pokeDom);

      this.idToGetDom.set(poke.id, pokeDom);
      poke.keyword.forEach(key => this.nameToId.set(key, poke.id));
    });
    pokeList.appendChild(df);

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = <Poke>entry.target;
          target.showImage();
          observer.unobserve(target);
        }
      });
    });
    this.idToGetDom.forEach(poke => observer.observe(poke));

    const initAnswered = localStorage.getItem("answered");
    if (initAnswered) {
      JSON.parse(initAnswered).forEach((answeredID: number) => {
        this.submit(answeredID);
        this.answered.push(answeredID);
      });
    }

    this.count();
    this.dareda();

    const settingsButton = <HTMLButtonElement>document.getElementById("setting");
    const answerButton = <HTMLButtonElement>document.getElementById("answer");
    const micButton = <HTMLButtonElement>document.getElementById("mic");

    settingsButton.addEventListener("click", this.listener.openSettings);
    answerButton.addEventListener("keydown", this.listener.answer);
    micButton.addEventListener("click", this.listener.speech);
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

    const daredaModeButton = <HTMLButtonElement>document.getElementById("dareda-mode");
    const clearAnswered = <HTMLButtonElement>document.getElementById("clear-answered");
    const configContainer = <HTMLDivElement>document.getElementById("config-container");
    const scrim = <HTMLDivElement>document.getElementById("config-curtain");

    daredaModeButton.addEventListener("click", this.listener.toggleDareda);
    clearAnswered.addEventListener("click", this.listener.clearAnswered);

    configContainer.classList.add("active");

    const t = () => configContainer.classList.remove("active");
    scrim.addEventListener("click", t);
  }

  toggleDareda() {
    const dareda = localStorage.getItem("dareda");

    if (!dareda) {
      localStorage.setItem("dareda", "true");
    } else if (dareda === "true") {
      localStorage.setItem("dareda", "false");
    } else {
      localStorage.setItem("dareda", "true");
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
    const bannerArea = <HTMLDivElement>document.getElementById("banner-area");

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
    const progress = <HTMLSpanElement>document.getElementById("progress");
    progress.textContent = `${this.answered.length}/${pokedex.length}`;
  }

  input(event: KeyboardEvent) {
    if (event.key === "Enter") {
      const answer = <HTMLInputElement>document.getElementById("answer");
      this.answer(answer.value);
    }
  }

  answer(value: string) {
    const id = this.nameToId.get(value);
    if (id && !this.answered.includes(id)) {
      const answerInput = <HTMLInputElement>document.getElementById("answer");
      answerInput.value = "";
      this.answered.push(id);
      localStorage.setItem("answered", JSON.stringify(this.answered));

      this.submit(id);

      const target = this.idToGetDom.get(id);
      const app = <HTMLDivElement>document.getElementById("app");
      if (target) {
        app.scrollTo({
          top: target.offsetTop - (window.innerHeight - target.offsetHeight) / 2,
          behavior: "smooth"
        });
      }
      this.showBanner(value, `./assets/images/pokemon/${id}.png`);
      this.count();
    }
  }

  submit(id: number) {
    const target = this.idToGetDom.get(id);
    if (target) target.active();
    // document.getElementById("progress").textContent = this.answered.length;
  }

  async speech() {
    const result = await this.listenSpeech();

    const nameList = [...this.nameToId.keys()];
    const firstMatchList: string[] = [];

    nameList.forEach(v => {
      if (result.includes(v)) firstMatchList.push(v);
    });

    firstMatchList.sort((a, b) => (a.length < b.length ? -1 : 1));

    const find = (matchList: string[], inputString: string) => {
      const r: string[] = [];

      const p = matchList.pop();

      if (p && inputString.includes(p)) {
        inputString = inputString.replace(p, "");
        r.push(p);
      }

      if (matchList.length && inputString.length) {
        r.push(...find(matchList, inputString));
      }

      return r;
    };

    const answer = find(firstMatchList, result);
    if (answer.length) {
      while (answer.length) {
        const pop = answer.pop();
        if (pop) this.answer(pop);
      }
    }
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

      speech.addEventListener("result", event => {
        const result = event.results[event.resultIndex];
        const alt = result[0];
        const text = alt.transcript;

        const speechText = <HTMLDivElement>document.querySelector(".speech-text");
        speechText.textContent = text;

        console.log("\n");
        console.log("RESULT:");
        console.log(event);
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
  shadow: ShadowRoot;

  pokeId: number;
  pokeName: string;
  pokeImageUrl: string;

  constructor(poke: pokeInfo) {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML = Poke.template();

    this.pokeId = poke.id;
    this.pokeName = poke.name;
    this.pokeImageUrl = `./assets/images/pokemon/${poke.id}.png`;

    const no = <HTMLParagraphElement>this.shadow.querySelector(".no");
    const img = <HTMLImageElement>this.shadow.querySelector(".img");

    no.textContent = `No: ${this.pokeId}`;
    img.setAttribute("data-src", this.pokeImageUrl);
    img.setAttribute("alt", "");
  }

  showImage() {
    const img = <HTMLImageElement>this.shadow.querySelector(".img");
    img.src = <string>img.getAttribute("data-src");
    img.removeAttribute("data-src");
  }

  active() {
    const name = <HTMLParagraphElement>this.shadow.querySelector(".name");
    name.textContent = this.pokeName;
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
