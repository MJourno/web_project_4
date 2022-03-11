export default class Section {
  constructor ({items, renderer}, cardTemplateSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardTemplateSelector);
    //console.log("initialArray", this._initialArray);
  }
  //render each element on a page
  renderItems() {
    this._initialArray.forEach(item => {
    this.addItem(this._renderer(item));
    })
  }
  //takes a DOM element and adds it to the container
  addItem(item) {
    console.log('addItem');
    this._container.prepend(item);
  }
}
