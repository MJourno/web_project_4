import { openPopup } from "./utils.js";

export default class Card {
  constructor(cardData, cardTemplateSelector, handlePreviewPicture) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._template = document.querySelector(cardTemplateSelector).content.querySelector('.element');
    this._handlePreviewPicture = handlePreviewPicture;
    this._cardContainer = document.querySelector('.elements');
  }
  _addEventListeners() {
    this._likeButton = this._element.querySelector('.element__like-button');
    this._deleteButton = this._element.querySelector('.element__delete');

    this._likeButton.addEventListener('click', () =>
      this._handleLikeButton()
    );

    this._deleteButton.addEventListener('click', (e) =>
      this._handleDeleteCard(e)
    );
    this._popupImg = this._element.querySelector('.element__img');

    this._popupImg.addEventListener('click', () => {
      this._handlePreviewPicture(this._link, this._name);
    });
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle('element__like-button_active')
  }

  _handleDeleteCard(e) {
    this._element.remove();
  }

  creatCard() {
    this._element = this._template.cloneNode(true);
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__img').style.backgroundImage = `url(${this._link})`;

    this._addEventListeners();

    return this._element;
  }

  render() {
    const cardData = this.creatCard();
    this._cardContainer.prepend(cardData);
  }
}
