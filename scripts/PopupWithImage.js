import Popup from './popup';
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open = ({link, name}) => {
    const imgElement = this._popup.querySelector('.popup__img');
    const imgCaption = this._popup.querySelector('.popup__caption');

    imgElement.src = link;
    imgElement.alt = `Image ${name}`;
    imgCaption.textContent = name;

    this._popup.classList.add('popup_is-open')
    this._popup.addEventListener('keyup', this._handleEscClose)
  }
}
