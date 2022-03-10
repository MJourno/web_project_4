import Popup from './popup';

export default class PopupWithForm extends Popup {
  constructor(submitForm, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formElement = this._popup.querySelector('.popup__form');
  }
  setEventListeners() {
    //modifies the setEventListeners() parent method

    super.setEventListeners();
    //click event listener to the close icon

    //add the submit event handler to the form
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm();
      this.close();
    });
  }

  getInputValues() {
    this._inputFieldsData = Array.from(this._formElement.querySelectorAll('.popup__input'));

    //data object
    this._inputFieldsDataObject = {};
    //collects data from all  input fields
    this._inputFieldsData.forEach(
      (input) => {
        //console.log(input.value);
        this._inputFieldsDataObject[input.name] = input.value}
    );
    // returns data as an object
    //console.log('inputs', this._inputFieldsDataObject);
    return this._inputFieldsDataObject;

  }

  close() {
    //modifies the close() parent method
    super.close();
    //reset the form once the popup is closed
    this._formElement.reset();
  }


}

