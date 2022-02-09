import {openPopup} from "./utils.js";
import { initialCards } from "./script.js";

export default class Card {
  constructor(cardData, cardTemplateSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._template = document.querySelector(cardTemplateSelector).content.querySelector('.element');
  }
  _addEventListeners() {
    this._likeButton = this._element.querySelector('.element__like-button');
    this._deleteButton = this._element.querySelector('.element__delete');

    //const cardImage = this._cardImage.querySelector('.element__img').style.backgroundImage = `url(${this._link})`;


    this._likeButton.addEventListener('click', () =>
    this._handleLikeButton()
    );

    this._deleteButton.addEventListener('click', () =>
    this._handleDeleteCard()
    );

    /*cardImage.addEventListener('click', (event) => {
      popupImg.src = cardData.link;
      popupImg.alt = cardData.name;
      popupCaption.textContent = cardData.name;
      this._handlePreviewPicture();
    });*/
  }

  _handleLikeButton () {
    const likeButton = this._element.querySelector('.element__like-button');
    likeButton.classList.toggle('element__like-button_active')
  }

  _handleDeleteCard (e) {
    e.target.closest('.element').remove();
  }

  _handlePreviewPicture () {
    openPopup()
  }



  render() {
    this._element = this._template.cloneNode(true);
    this._element.querySelector('.element__title').textContent = this._name;
    this._element = querySelector('.element__img').style.backgroundImage = `url(${this._link})`;
    this._addEventListeners();

    document.querySelector('.elements').append(this._element);

    return this._element;
  }
}
