//const ESC_KEYCODE = 27;

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)

  }
  setEventListeners() {
    //click event listener to the close icon
    this._popupCloseButton = this._popup.querySelector('.popup__close').addEventListener('click', () => {
      this.close();
      //evt.stopImmediatePropagation();
    })
    //click event listener to the overlay
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.matches('.popup')) {
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

  _handleEscClose(evt) {
    //evt.preventDefault();
    if(evt.key === 'Escape') {
      this.close()
    }
  }

}
