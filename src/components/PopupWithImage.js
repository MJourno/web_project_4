import Popup from './popup';
export default class PopupWithImage extends Popup {

  open = ({link, name}) => {
    const imgElement = this._popup.querySelector('.popup__img');
    const imgCaption = this._popup.querySelector('.popup__caption');

    imgElement.src = link;
    imgElement.alt = `Image ${name}`;
    imgCaption.textContent = name;
    super.open();
  }
}
