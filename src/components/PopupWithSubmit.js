import Popup from './Popup';
export default class PopupWithSubmit extends Popup {
  setAction(action) {
    this._handleSubmit = action

  }

  setEventListeners() {
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit();
      this.close();
    });
    super.setEventListeners();
  }
}
