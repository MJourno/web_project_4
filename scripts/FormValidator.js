export default class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formElement = formElement;
    this._inputElements = [...this._formElement.querySelectorAll(this._inputSelector)];
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }
  updateFormValidation() {
    //const inputElements = [...formElement.querySelectorAll(this._inputSelector)];
    //const buttonElement = formElement.querySelector(this._submitButtonSelector);
    this._inputElements.forEach((input) => {
      this._hideInputError(input)
    })

    this.toggleButtonState(this._inputElements, this._buttonElement);
  }

  _showInputError(inputElement, validationMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  }

  toggleButtonState(inputElements, buttonElement) {
    const hasInvalidInput = inputElements.some(inputElement => !inputElement.validity.valid);

    if (hasInvalidInput) {
      buttonElement.classList.add(this._inactiveButtonClass)
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass)
      buttonElement.disabled = false;
    }
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement, inputElement.validationMessage);
    }
  }

  _setEventListeners() {
    const inputElements = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    inputElements.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState(inputElements, buttonElement);
      })
    })
  }

  // Enable form validation
  enableValidation() {
    this._setEventListeners();
  }
}
