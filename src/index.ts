import pokedex from "./pokedex";
import Poke from "./components/poke";
import IconButton from "./components/iconButton";
import { IWindow } from "./type";
import { MDCRipple } from "@material/ripple";
import { MDCDialog } from "@material/dialog";
// import mdcAutoInit from "@material/auto-init";

customElements.define("icon-button", IconButton);

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

    const settingsButton = document.getElementById("setting") as HTMLButtonElement;
    const answerButton = document.getElementById("answer") as HTMLButtonElement;
    const micButton = document.getElementById("mic") as HTMLButtonElement;

    // mdcAutoInit();
    const settingsButtonRipple = new MDCRipple(settingsButton);
    const micButtonRipple = new MDCRipple(micButton);
    settingsButtonRipple.unbounded = true;
    micButtonRipple.unbounded = true;

    const pokeList = document.getElementById("poke-list") as HTMLDivElement;
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
          const target = entry.target as Poke;
          target.intersect();
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

    settingsButton.addEventListener("click", this.listener.openSettings);
    answerButton.addEventListener("keydown", this.listener.answer);
    micButton.addEventListener("click", this.listener.speech);
  }

  openSettings() {
    if (!document.getElementById("settings")) {
      const df = document.createElement("div");
      df.id = "settings";
      df.classList.add("mdc-dialog");
      df.innerHTML = `
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          <h2 class="mdc-dialog__title">Settings</h2>
          <div class="mdc-dialog__content">
            <div>
              <button id="dareda-mode" class="mdc-button">
                <div class="mdc-button__ripple"></div>
                <span class="mdc-button__label">Dareda Mode</span>
              </button>
            </div>
            <div>
              <button id="clear-answered" class="mdc-button">
                <div class="mdc-button__ripple"></div>
                <span class="mdc-button__label">回答履歴を削除</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>`;

      const buttons = df.querySelectorAll("button");
      buttons.forEach(button => new MDCRipple(button));

      document.body.appendChild(df);
    }

    const dialog = new MDCDialog(document.getElementById("settings") as HTMLDivElement);
    dialog.open();

    const daredaModeButton = document.getElementById("dareda-mode") as HTMLButtonElement;
    const clearAnswered = document.getElementById("clear-answered") as HTMLButtonElement;
    // const configContainer = document.getElementById("config-container") as HTMLDivElement;
    // const scrim = document.getElementById("config-curtain") as HTMLDivElement;

    daredaModeButton.addEventListener("click", this.listener.toggleDareda);
    clearAnswered.addEventListener("click", this.listener.clearAnswered);

    // configContainer.classList.add("active");

    // const t = () => configContainer.classList.remove("active");
    // scrim.addEventListener("click", t);
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
    const bannerArea = document.getElementById("banner-area") as HTMLDivElement;

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
    const progress = document.getElementById("progress") as HTMLSpanElement;
    progress.textContent = `${this.answered.length}/${pokedex.length}`;
  }

  input(event: KeyboardEvent) {
    if (event.key === "Enter") {
      const answer = document.getElementById("answer") as HTMLInputElement;
      this.answer(answer.value);
    }
  }

  answer(value: string) {
    const id = this.nameToId.get(value);
    if (id && !this.answered.includes(id)) {
      const answerInput = document.getElementById("answer") as HTMLInputElement;
      answerInput.value = "";
      this.answered.push(id);
      localStorage.setItem("answered", JSON.stringify(this.answered));

      this.submit(id);

      const target = this.idToGetDom.get(id);
      const app = document.getElementById("app") as HTMLDivElement;
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
    if (target) target.answered();
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
    if (!document.getElementById("speech")) {
      const df = document.createElement("div");
      df.id = "speech";
      df.classList.add("mdc-dialog");
      df.innerHTML = `
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          <div class="mdc-dialog__content">
            <div class="speech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
              </svg>
            </div>
            <div class="speech-text">...</div>
          </div>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>`;

      document.body.appendChild(df);
    }

    const { webkitSpeechRecognition }: IWindow = (window as unknown) as IWindow;
    const speech = new webkitSpeechRecognition();
    speech.lang = "ja-JP";
    speech.interimResults = true;
    speech.continuous = true;

    const dialog = new MDCDialog(document.getElementById("speech") as HTMLDivElement);
    dialog.listen("MDCDialog:closed", () => speech.stop());
    dialog.open();

    speech.addEventListener("end", () => dialog.close());

    const speechText = document.querySelector(".speech-text") as HTMLDivElement;
    speechText.textContent = "...";

    return new Promise<string>(resolve => {
      speech.addEventListener("result", (event: any) => {
        const result = event.results[event.resultIndex];
        const alt = result[0];
        const text = alt.transcript;

        speechText.textContent = text;

        console.log("==================================================");
        console.log("Rrsult Event");
        console.log("Event: ", event);
        console.log("Text: ", text);
        console.log("isFinal: ", result.isFinal);
        console.log("==================================================");

        if (result.isFinal) {
          speech.stop();
          resolve(text);
        }
      });

      speech.start();
    });
  }
}

new Main();
