import { pokeInfo } from "../../pokedex/types";

export default class Poke extends HTMLElement {
  shadow: ShadowRoot;

  pokeId: number = 0;
  pokeName: string = "";
  pokeImageUrl: string = "";
  pokeImageDaredaUrl: string = "";

  _answered: boolean = false;

  imgElm: HTMLImageElement;

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML = Poke.template();

    this.classList.add("no-intersecting");

    this.imgElm = document.createElement("img");
    this.imgElm.classList.add("img");
    this.imgElm.setAttribute("alt", "");
  }

  setPoke(poke: pokeInfo) {
    this.pokeId = poke.id;
    this.pokeName = poke.name;
    this.pokeImageUrl = `./assets/images/pokemon/${poke.id}.png`;
    this.pokeImageDaredaUrl = `./assets/images/pokemon/dareda/${poke.id}.png`;

    const no = this.shadow.querySelector(".no") as HTMLParagraphElement;

    no.textContent = `No: ${this.pokeId}`;
  }

  intersect() {
    this.classList.remove("no-intersecting");
    const imgarea = this.shadow.querySelector(".imgarea") as HTMLDivElement;
    const template = this.shadow.querySelector(
      "template"
    ) as HTMLTemplateElement;
    imgarea.replaceChild(this.imgElm, template);

    if (!this._answered) this.imgElm.src = this.pokeImageDaredaUrl;
  }

  answered() {
    this._answered = true;

    this.imgElm.src = this.pokeImageUrl;

    const name = this.shadow.querySelector(".name") as HTMLParagraphElement;
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
      pointer-events: none;
    }
    :host(.no-intersecting){
      visibility: hidden;
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
      <template name="img"></template>
    </div>
    <div class="primary">
      <p class="no">No: 0</p>
      <p class="name">？？？？</p>
    </div>`;
  }
}

customElements.define("poke-item", Poke);
