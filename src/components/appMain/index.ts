export default class AppMain extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = AppMain.template();
  }

  static template() {
    return `<div id="poke-list"></div>`;
  }
}
