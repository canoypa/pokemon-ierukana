class Main {
  private listener: { [s: string]: EventListener } = {
    openSettings: () => this.openSettings()
  };

  constructor() {
    // service worker
    if ("serviceWorker" in navigator) this.registerServiceWorker();

    // settings button
    const settingsButton = <HTMLButtonElement>document.getElementById("setting");
    settingsButton.addEventListener("click", this.listener.openSettings);
  }

  openSettings() {
    localStorage.removeItem("answered");
  }

  registerServiceWorker() {
    navigator.serviceWorker
      .register("sw.js", { scope: "/pokemon-ierukana/" })
      .then(reg => console.log("ServiceWorker registration successful with scope: ", reg.scope))
      .catch(err => console.log("ServiceWorker registration failed: ", err));
  }
}

class PokeDomManager {
  constructor(pokedata) {
    this.view = document.createDocumentFragment();
    this.answerInput = document.getElementById("answer");
    this.mic = document.getElementById("mic");

    this.pokes = {};
    this.pokeMap = new Map();
    this.pokeMapKeys;
    this.answered = [];
    this.listener = {
      speech: e => this.speech(e),
      speechResult: e => this.speechResult(e)
    };

    pokedata.forEach(d => {
      d.keyword.forEach(k => this.pokeMap.set(k, `id${d.id}`));

      const poke = new Poke(d);
      this.pokes[`id${d.id}`] = poke;

      this.view.appendChild(poke.view);
    });
    this.pokeMapKeys = [...this.pokeMap.keys()];

    const p = document.createDocumentFragment();
    const progress = document.createElement("span");
    const slash = document.createTextNode("/");
    const total = document.createElement("span");
    progress.id = "progress";
    total.id = "total";
    progress.textContent = "0";
    total.textContent = pokes.length;
    p.appendChild(progress);
    p.appendChild(slash);
    p.appendChild(total);
    document.getElementById("p").textContent = "";
    document.getElementById("p").appendChild(p);

    document.getElementById("pokes").appendChild(this.view);

    const initAnswered = localStorage.getItem("answered");
    if (initAnswered) {
      JSON.parse(initAnswered).forEach(a => this.answer(a));
    }

    this.mic.addEventListener("click", this.listener.speech);
    this.answerInput.addEventListener("keydown", e => (e.key === "Enter" ? this.submit(this.answerInput.value) : false));
  }
  submit(word) {
    const key = this.pokeMap.get(word);
    if (key) this.answer(key);
  }
  answer(key) {
    if (key && !this.answered.includes(key)) {
      this.answerInput.value = "";
      this.answered.push(key);
      this.pokes[key].active();
      document.getElementById("progress").textContent = this.answered.length;

      localStorage.setItem("answered", JSON.stringify(this.answered));
    }
  }
  speech() {
    const speech = new webkitSpeechRecognition();
    speech.lang = "ja-JP";
    speech.interimResults = true;
    speech.continuous = true;

    speech.addEventListener("result", this.listener.speechResult);
    speech.addEventListener("error", e => console.log(e));
    speech.addEventListener("soundstart", e => console.log(e));

    speech.start();
  }
  speechResult(e) {
    const result = e.results[e.resultIndex];
    const alt = result[0];

    console.log("\n");
    console.log("RESULT:");
    console.log(e);
    console.log(alt.transcript);
    console.log(result.isFinal);

    if (result.isFinal) {
      this.pokeMapKeys.forEach(k => {
        if (alt.transcript.includes(k)) {
          this.submit(k);
        }
      });
      this.answerInput.classList.remove("speech");
    } else {
      this.answerInput.value = alt.transcript;
      this.answerInput.classList.add("speech");
    }
  }
}
class Poke {
  constructor(poke) {
    this.id = poke.id;
    this.name = poke.name;
    this.image = `/pokemon-ierukana/assets/images/pokemon/${poke.image}`;

    this.view = document.createElement("div");
    this.viewItem = {
      imagearea: document.createElement("div"),
      bone: document.createElement("div"),
      image: document.createElement("img"),
      primary: document.createElement("div"),
      no: document.createElement("p"),
      name: document.createElement("p")
    };

    this.view.classList.add("poke");
    this.viewItem.imagearea.classList.add("poke-imgarea");
    this.viewItem.bone.classList.add("poke-imgbone");
    this.viewItem.image.classList.add("poke-img");
    this.viewItem.primary.classList.add("poke-primary");
    this.viewItem.no.classList.add("poke-no");
    this.viewItem.name.classList.add("poke-name");

    this.viewItem.bone.textContent = "？";
    this.viewItem.no.textContent = `No: ${this.id}`;
    this.viewItem.name.textContent = "？？？？";

    this.viewItem.imagearea.appendChild(this.viewItem.bone);
    this.viewItem.primary.appendChild(this.viewItem.no);
    this.viewItem.primary.appendChild(this.viewItem.name);
    this.view.appendChild(this.viewItem.imagearea);
    this.view.appendChild(this.viewItem.primary);
  }
  active() {
    this.viewItem.image.src = this.image;
    this.viewItem.name.textContent = this.name;

    this.viewItem.imagearea.removeChild(this.viewItem.bone);
    this.viewItem.imagearea.appendChild(this.viewItem.image);

    this.view.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

new Main();
