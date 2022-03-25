export default class Card {
  constructor(cardData, cardTemplateSelector, handleCardClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._template = document.querySelector(cardTemplateSelector).content.querySelector('.element');
    this._handleCardClick = handleCardClick;
  }
  _addEventListeners() {
    //handleLikeButton
    this._likeButton = this._element.querySelector('.element__like-button');
    this._likeButton.addEventListener('click', () =>
      this._handleLikeButton()
    );
    //handleDeleteCard
    this._deleteButton = this._element.querySelector('.element__delete');
    this._deleteButton.addEventListener('click', (e) =>
      this._handleDeleteCard(e)
    );
    //handlePreviewPicture
    this._element.querySelector('.element__img')
      .addEventListener('click', () => this._handlePreviewPicture()
      );
  }
  _handlePreviewPicture() {
    this._handleCardClick({ link: this._link, name: this._name });
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle('element__like-button_active')
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  renderCard() {
    this._element = this._template.cloneNode(true);
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__img').style.backgroundImage = `url(${this._link})`;

    this._addEventListeners();

    return this._element;
  }
}
