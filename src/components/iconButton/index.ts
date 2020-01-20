export default class IconButton extends HTMLElement {
  iconName: any;

  constructor() {
    super();

    this.iconName = this.getAttribute("icon-name") as string;

    this.innerHTML = this.template();

    this.classList.add("mdc-icon-button");
  }

  template() {
    return `<img src="./assets/images/icons/${this.iconName}.svg" alt="${this.iconName}" class="mdc-icon-button__icon" />`;
  }
}
