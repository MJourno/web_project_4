export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
  setEventListeners() {
    //click event listener to the close icon
    this._popupCloseButton = this._element.querySelector('.popup__close');
    this._popupCloseButton.addEventListener('click', (evt) => {
      this.close();
      evt.stopImmediatePropagation();
    })
    //click event listener to the overlay
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.matches('.popup')) {
        this.close();
        evt.stopImmediatePropagation();
      }
    })
  }

  open() {
    this._popup.classList.add('popup_is-open');
    document.addEventListener('keydown', this._handleEscClose)
  }
  close() {
    this._popup.classList.remove('popup_is-open');
    document.removeEventListener('keydown', this._handleEscClose)
  }

  _handleEscClose(evt) {
    evt.preventDefault();
    if (evt.key === 'Escape') {
      this.close();
    }
  }

}
