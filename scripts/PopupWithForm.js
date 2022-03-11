import Popup from './popup';

export default class PopupWithForm extends Popup {
  constructor(submitForm, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formElement = this._popup.querySelector('.popup__form');
    this._inputFieldsData = this._formElement.querySelectorAll('.popup__input');
  }
  setEventListeners() {
    //click event listener to the close icon

    //add the submit event handler to the form
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
      this.close();
    });
    //modifies the setEventListeners() parent method
    super.setEventListeners();
  }

  _getInputValues() {
    //data object
    this._inputFieldsDataObject = {};
    //collects data from all  input fields
    this._inputFieldsData.forEach(
      (input) => (
        this._inputFieldsDataObject[input.name] = input.value
      )
    );
    // returns data as an object
    console.log('inputs', this._inputFieldsDataObject);
    return this._inputFieldsDataObject;

  }

  close() {

    //reset the form once the popup is closed
    this._formElement.reset();
        //modifies the close() parent method
        super.close();
  }


}

