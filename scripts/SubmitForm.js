/*export default class SubmitForm {
  constructor({ formSelector, handleFormSubmit }) {
    this._formSelector = formSelector;
    this._handleFormSubmit = handleFormSubmit;
  }
  _getTemplate() {
    const formElement = document
    .querySelector(this._formSelector)
    .content
    .querySelector(".popup__form")
    .cloneNode(true);

  return formElement;
}
_setEventListeners() {
  // when the form is submitted
  this._element.addEventListener("submit", (evt) => {
    // we'll cancel the default behavior
    evt.preventDefault();
    // and reset its fields
    this._element.reset();
  })
}
generateForm() {
  this._element = this._getTemplate(); // create an element
  this._setEventListeners(); // add listeners
  return this._element; // return the markup
}
_getInputValues() {
  // Get all field elements
  this._inputList = this._element.querySelectorAll(".form__input");

  // Create an empty object
  this._formValues = {};

  // Add the values of the fields to this object
  this._inputList.forEach(input => {
    this._formValues[input.name] = input.value;
  });

  // Return the values object
  return this._formValues;
}
}
