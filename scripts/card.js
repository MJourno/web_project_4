export default class Card {
  constructor(cardData, cardTemplateSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._template = document.querySelector(cardTemplateSelector).content.querySelector('.element');
  }
  /*_handleLikeButton () {

  }

  _handleDeleteCard () {

  }

  _handlePreviewPicture () {

  }*/

  _addEventListeners() {
    const cardImage = this._element.querySelector('.element__img')
    const likeButton = this._element.querySelector('.element__like-button');

    cardImage.style.backgroundImage = `url(${this._link})`;
    this._element.querySelector('.element__title').textContent = this._name;

    likeButton.addEventListener('click', () => {
      likeButton.classList.toggle('element__like-button_active')
    });
    this._element.querySelector('.element__delete').addEventListener('click', (event) => {
      const listItem = event.target.closest('.element');
      listItem.remove();
    });
    cardImage.addEventListener('click', (event) => {
      popupImg.src = cardData.link;
      popupImg.alt = cardData.name;
      popupCaption.textContent = cardData.name;
      openPopup(popupOpenImg);
    });
  }

  render() {
    this._element = this._template.cloneNode(true);
    this._addEventListeners();

    return this._element;


  }
}
