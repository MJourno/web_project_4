export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);

  }
  setEventListeners() {
    //click event listener to the overlay &  close icon
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.matches('.popup_is-open') || evt.target.matches('.popup__close')) {
        this.close();
      }
    })
  }

  open() {
    this._popup.classList.add('popup_is-open');
    document.addEventListener('keyup', this._handleEscClose)
  }
  close() {
    this._popup.classList.remove('popup_is-open');
    document.removeEventListener('keyup', this._handleEscClose)
  }

  _handleEscClose = (evt) => {
    evt.preventDefault();

    if (evt.key === 'Escape') {
      this.close();
    }
  }

}
