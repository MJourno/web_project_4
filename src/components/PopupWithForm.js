import Popup from './Popup';

export default class PopupWithForm extends Popup {
  constructor(submitForm, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formElement = this._popup.querySelector('.popup__form');
  }
  setEventListeners() {
    //add the submit event handler to the form
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
      this.renderLoading(true);
    });
    super.setEventListeners();
  }

  renderLoading(isLoading) {
    const submitButton = this._formElement.querySelector('.popup__save');
    const submitButtonValue = submitButton.value;
    if (isLoading) {
      this._formElement.querySelector('.popup__save').textContent = "Saving...";
    } else {
      this._formElement.querySelector('.popup__save').textContent = submitButtonValue;
    }
  }

  _getInputValues() {
    const inputFieldsDataObject = {};
    const inputFieldsData = this._formElement.querySelectorAll('.popup__input');
    //collects data from all  input fields
    inputFieldsData.forEach(
      (input) => (
        inputFieldsDataObject[input.name] = input.value
      )
    );
    // returns data as an object
    return inputFieldsDataObject;
  }

  close() {
    this._formElement.reset();
    super.close();
  }
}

