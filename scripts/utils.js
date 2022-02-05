/*export default class utils {

  openPopup () {
    this.popup.classList.add('popup_is-open')
  }

  closePopup () {
    this.popup.classList.remove('popup_is-open')
  }

  closeByEscape () {
    if (evt.key === 'Escape') {
      this.closePopup()
    }
  }

  closeByClick () {
    if (evt.target.matches('.popup')) {
    this.closePopup()
  }
  }

  EventListeners() {
    document.addEventListener('keydown', this.closeByEscape);
    document.addEventListener('click', this.closeByClick);

    document.removeEventListener('keydown', this.closeByEscape);
    document.removeEventListener('click', this.closeByClick);
  }

}*/
export function openPopup(popup) {
  popup.classList.add('popup_is-open')
  document.addEventListener('keydown', closeByEscape)
  document.addEventListener('click', closeByClick);
};

export function closePopup(popup) {
  popup.classList.remove('popup_is-open')
  document.removeEventListener('keydown', closeByEscape)
  document.removeEventListener('click', closeByClick);
};

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-open')
    closePopup(openedPopup)
  }
}

function closeByClick(evt) {
  if (evt.target.matches('.popup')) {
    closePopup(evt.target)
  }
}
