export default class Section {
  constructor ({items, renderer}, cardTemplateSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardTemplateSelector);
    //console.log("initialArray", this._initialArray);
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
    this._initialArray.forEach(item => {
    const card = this._renderer(item);
    this.addItem(element);
    })
  }
  //takes a DOM element and adds it to the container
  addItem(item) {
    this._container.prepend(item);
  }
}
