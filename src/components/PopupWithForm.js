import Popup from './Popup';

export default class PopupWithForm extends Popup {
  constructor(submitForm, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formElement = this._popup.querySelector('.popup__form');
    this._inputFieldsData = this._formElement.querySelectorAll('.popup__input');
    this._submitButton = this._formElement.querySelectorAll('.popup__save');
  }
  setEventListeners() {
    //add the submit event handler to the form
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    });
    super.setEventListeners();
  }

  _getInputValues() {
    this._inputFieldsDataObject = {};
    //collects data from all  input fields
    this._inputFieldsData.forEach(
      (input) => (
        this._inputFieldsDataObject[input.name] = input.value
      )
    );
    // returns data as an object
    return this._inputFieldsDataObject;
  }

  close() {
    this._formElement.reset();
    super.close();
  }
}

