import { pokeInfo } from "../pokedex/types";

export default class Poke extends HTMLElement {
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
