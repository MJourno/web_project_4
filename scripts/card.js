import {openPopup} from "./utils.js";

export default class Card {
  constructor(cardData, cardTemplateSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._template = document.querySelector(cardTemplateSelector).content.querySelector('.element');
  }

  _handleLikeButton () {
    likeButton.classList.toggle('element__like-button_active')
  }

  _handleDeleteCard () {
    const listItem = deleteButton.target.closest('.element');
      listItem.remove();
  }

  _handlePreviewPicture () {
    openPopup()
  }

  _addEventListeners() {
    const cardImage = this._element.querySelector('.element__img').style.backgroundImage = `url(${this._link})`;
    const likeButton = this._element.querySelector('.element__like-button');
    const deleteButton = this._element.querySelector('.element__delete');

    this._element.querySelector('.element__title').textContent = this._name;

    this.likeButton.addEventListener('click', () =>
    this._handleLikeButton()
    );

    this.deleteButton.addEventListener('click', () =>
    this._handleDeleteCard()
    );

    cardImage.addEventListener('click', (event) => {
      popupImg.src = cardData.link;
      popupImg.alt = cardData.name;
      popupCaption.textContent = cardData.name;
      this._handlePreviewPicture();
    });
  }

  render() {
    this._element = this._template.cloneNode(true);
    this._addEventListeners();

    return this._element;


  }
}
