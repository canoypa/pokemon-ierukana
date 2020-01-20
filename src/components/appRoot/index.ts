export default class AppRoot extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = AppRoot.template();
  }

  static template() {
    return `
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
    <div id="banner-area"></div>`;
  }
}
