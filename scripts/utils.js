
export function openPopup(popup) {
  popup.classList.add('popup_is-open')
  document.addEventListener('keydown', closeByEscape)
  document.addEventListener('click', closeByClick);
};

function closePopup(popup) {
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
