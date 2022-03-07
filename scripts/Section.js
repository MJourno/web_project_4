export default class Section {
  constructor ({items, renderer}, cardTemplateSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardTemplateSelector);
  }
  //render each element on a page
  renderItems() {
    /*if (!Array.isArray(this._initialArray)) {
      this.addItem(this._renderer(this._initialArray))
    } else {
      this._initialArray.forEach(item => {
        this.addItem(this._renderer(item));
      })
    }*/
    this._initialArray.forEach(item => this._renderer(item));
  }
  //takes a DOM element and adds it to the container
  addItem(element) {
    this._container.prepend(element);
  }
}

