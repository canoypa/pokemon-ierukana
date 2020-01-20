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
    <div id="answer-area">
      <input id="answer" type="text" placeholder="解答欄" aria-label="解答欄" />
      <icon-button id="mic" aria-label="音声入力" icon-name="mic"></icon-button>
    </div>`;
  }
}
