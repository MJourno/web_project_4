import {openPopup} from "./utils.js";

export default class Card {
  constructor(cardData, cardTemplateSelector, handlePreviewPicture) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._template = document.querySelector(cardTemplateSelector).content.querySelector('.element');
    this._handlePreviewPicture = handlePreviewPicture;
  }
  _addEventListeners() {
    this._likeButton = this._element.querySelector('.element__like-button');
    this._deleteButton = this._element.querySelector('.element__delete');

   //this._popupImg = this._element.querySelector('.element__img').style.backgroundImage = `url(${this._link})`;


    this._likeButton.addEventListener('click', () =>
    this._handleLikeButton()
    );

    this._deleteButton.addEventListener('click', (e) =>
    this._handleDeleteCard(e)
    );
    this._popupImg = this._element.querySelector('.element__img');
    //this._popupImg.style.backgroundImage = `url(${this._link})`;

    this._popupImg.addEventListener('click', () => {
      /*popupImg.src =  this._link;
      popupImg.alt = this._name;
      popupCaption.textContent = cardData.name;*/
      this._handlePreviewPicture(this._link, this._name);
    });
  }

  _handleLikeButton () {
    const likeButton = this._element.querySelector('.element__like-button');
    likeButton.classList.toggle('element__like-button_active')
  }

  _handleDeleteCard(e) {
    e.target.closest('.element').remove();
  }

  _handlePreviewPicture () {
    /*popupImg.src = cardData.link;
    popupImg.alt = cardData.name;
    popupCaption.textContent = cardData.name;*/
    openPopup()
  }



  render() {
    this._element = this._template.cloneNode(true);
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__img').style.backgroundImage = `url(${this._link})`;
    this._addEventListeners();

    document.querySelector('.elements').prepend(this._element);

    return this._element;
  }
}
