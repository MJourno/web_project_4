import Popup from './popup';
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({link, name}) {
    const popupImg = this._popup.querySelector('.popup__img');
    const popupCaption = this._popup.querySelector('.popup__caption');

    popupImg.src = link;
    popupImg.alt = `Image ${name}`;
    popupCaption.textContent = name;

    this._popup.classList.add('popup_is-open')
    this._popup.addEventListener('keydown', this._handleEscClose)
  }
}
