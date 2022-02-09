export default class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formElement = formElement;
  }
  checkInitialFormValidity() {
    const inputElements = [...formElement.querySelectorAll(this._inputSelector)];
    const buttonElement = formElement.querySelector(this._submitButtonSelector);

    this.toggleButtonState();
  }

  _showInputError(inputElement, validationMessage) {
    const errorElement = this._formElement.querySelector(`#${this._inputElement.id}-error`);

    this._inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = this._inputElement.validationMessage;
    errorElement.classList.add(settings.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${this._inputElement.id}-error`);

    this._inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  }

  toggleButtonState(inputElements, buttonElement) {
    const hasInvalidInput = this._inputElements.some(inputElement => !inputElement.validity.valid);

    if (hasInvalidInput) {
      this._buttonElement.classList.add(this._inactiveButtonClass)
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass)
      this._buttonElement.disabled = false;
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
    this._formElement.addEventListener('submit', e => {
      e.preventDefault();
    });

    this._setEventListeners();
  }
}
