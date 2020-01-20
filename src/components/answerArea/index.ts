export default class AnswerArea extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = AnswerArea.template();
  }

  static template() {
    return `
    <input id="answer" type="text" placeholder="解答欄" aria-label="解答欄" />
    <icon-button id="mic" aria-label="音声入力" icon-name="mic"></icon-button>`;
  }
}
