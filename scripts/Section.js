export default class Section {
  constructor ({items, renderer}, cardTemplateSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardTemplateSelector);
  }
  renderItems() {
    this._initialArray.forEach(item => {
      this.addItem(this._renderer(item));
    })
  }
  addItem(element) {
    this._container.prepend(element);

  }
}

