export default class Section {
  constructor({ /*items,*/ renderer }, cardTemplateSelector) {
    //this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardTemplateSelector);
    //console.log("initialArray", this._initialArray);
  }
  //render each element on a page
  renderItems(cards) {
    cards.forEach(this._renderer);
  }
  //takes a DOM element and adds it to the container
  addItem(item) {
    this._container.prepend(item);
  }
}
