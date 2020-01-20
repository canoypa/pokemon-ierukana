export default class AppFooter extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = AppFooter.template();
  }

  static template() {
    return `
    <div id="data">
      <!-- <time id="time">nn</time> -->
      <span id="progress">Loading...</span>
    </div>
    <answer-area></answer-area>`;
  }
}
