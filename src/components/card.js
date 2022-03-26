import { data } from "autoprefixer";

export default class Card {
  constructor(cardData, cardTemplateSelector, handleCardClick, {handleDeleteCard, handleLikeButton}, userId) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._template = document.querySelector(cardTemplateSelector).content.querySelector('.element');
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeButton = handleLikeButton;

    this._id = cardData._id;
    this._userId = userId;
    this._ownerId = cardData.owner._id;
    this._likes = cardData.likes;

    //console.log('CardUserId', this._userId)
  }
  _addEventListeners() {
    //handleLikeButton
    this._likeButton = this._element.querySelector('.element__like-button');
    this._likeButton.addEventListener('click', () =>
      this._handleLikeButton(this._id)
    );
    //handleDeleteCard
    this._deleteButton = this._element.querySelector('.element__delete');
    this._deleteButton.addEventListener('click', () =>
      this._handleDeleteCard(this._id)
    );
    //handlePreviewPicture
    this._element.querySelector('.element__img')
      .addEventListener('click', () => this._handlePreviewPicture()
      );
  }
  _handlePreviewPicture() {
    this._handleCardClick({ link: this._link, name: this._name });
  }

  isLiked() {
    return this._likes.some((person) => person._id === this._userId)

  }

  /*_handleLikeButton() {
    this._likeButton.classList.toggle('element__like-button_active')
  }*/

  /*_handleDeleteCard() {
    console.log('_handleDeleteCard');
    this._element.remove();
  }*/
  removeCard() {
    this._element.remove();
    this._element = null;
  }

  likeCard(newLikes) {
    this._likes = newLikes
    this._element.querySelector('.element__like-count').textContent = this._likes.length;

    this._likeButton.classList.toggle('element__like-button_active');
  }

  renderCard() {
    this._element = this._template.cloneNode(true);
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__img').style.backgroundImage = `url(${this._link})`;

    this._addEventListeners();

    if(this._ownerId !==  this._userId) {
      this._element.querySelector('.element__delete').style.display = 'none'
    }
    //element__likes-count
    this._element.querySelector('.element__like-count').textContent = this._likes.length;

    if (this.isLiked()) {
      this.likeCard(this._likes)
    }

    return this._element;
  }
}
