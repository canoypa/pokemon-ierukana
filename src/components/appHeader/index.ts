export default class AppHeader extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = AppHeader.template();
  }

  static template() {
    return `
    <section class="start">
      <span id="title">Pokémon Ierukana</span>
    </section>
    <section class="end">
      <icon-button id="setting" aria-label="設定" icon-name="settings"></icon-button>
    </section>`;
  }
}
