/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FormValidator; }
/* harmony export */ });
class FormValidator {
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
    this._inputElements.forEach(input => {
      this._hideInputError(input);
    });

    this.toggleButtonState(this._inputElements, this._buttonElement);
  }

  _showInputError(inputElement, validationMessage) {
    const errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error"));

    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error"));

    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  }

  toggleButtonState(inputElements, buttonElement) {
    const hasInvalidInput = inputElements.some(inputElement => !inputElement.validity.valid);

    if (hasInvalidInput) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
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
      });
    });
  } // Enable form validation


  enableValidation() {
    this._setEventListeners();
  }

}

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithForm; }
/* harmony export */ });
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ "./src/components/popup.js");

class PopupWithForm extends _popup__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(submitForm, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formElement = this._popup.querySelector('.popup__form');
    this._inputFieldsData = this._formElement.querySelectorAll('.popup__input');
  }

  setEventListeners() {
    //add the submit event handler to the form
    this._popup.addEventListener('submit', evt => {
      evt.preventDefault();

      this._submitForm(this._getInputValues());

      this.close();
    });

    super.setEventListeners();
  }

  _getInputValues() {
    this._inputFieldsDataObject = {}; //collects data from all  input fields

    this._inputFieldsData.forEach(input => this._inputFieldsDataObject[input.name] = input.value); // returns data as an object


    console.log('inputs', this._inputFieldsDataObject);
    return this._inputFieldsDataObject;
  }

  close() {
    this._formElement.reset();

    super.close();
  }

}

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithImage; }
/* harmony export */ });
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ "./src/components/popup.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class PopupWithImage extends _popup__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "open", _ref => {
      let {
        link,
        name
      } = _ref;

      const imgElement = this._popup.querySelector('.popup__img');

      const imgCaption = this._popup.querySelector('.popup__caption');

      imgElement.src = link;
      imgElement.alt = "Image ".concat(name);
      imgCaption.textContent = name;
      super.open();
    });
  }

}

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Section; }
/* harmony export */ });
class Section {
  constructor(_ref, cardTemplateSelector) {
    let {
      items,
      renderer
    } = _ref;
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardTemplateSelector); //console.log("initialArray", this._initialArray);
  } //render each element on a page


  renderItems() {
    console.log('sectionRender');

    this._initialArray.forEach(this._renderer);
  } //takes a DOM element and adds it to the container


  addItem(item) {
    console.log('sectionAddItem');

    this._container.prepend(item);
  }

}

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UserInfo; }
/* harmony export */ });
class UserInfo {
  constructor(_ref) {
    let {
      userNameSelector,
      userJobSelector
    } = _ref;
    this._userNameElement = document.querySelector(userNameSelector);
    this._userJobElement = document.querySelector(userJobSelector);
  } //method which returns an object with information about the user(to display the user data in the open form)


  getUserInfo() {
    return {
      name: this._userNameElement.textContent,
      job: this._userJobElement.textContent
    };
  } //method which takes new user data and adds it on the page


  setUserInfo(_ref2) {
    let {
      name,
      job
    } = _ref2;
    this._userNameElement.textContent = name;
    this._userJobElement.textContent = job;
  }

}

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Card; }
/* harmony export */ });
class Card {
  constructor(cardData, cardTemplateSelector, handleCardClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._template = document.querySelector(cardTemplateSelector).content.querySelector('.element');
    this._handleCardClick = handleCardClick;
  }

  _addEventListeners() {
    //handleLikeButton
    this._likeButton = this._element.querySelector('.element__like-button');

    this._likeButton.addEventListener('click', () => this._handleLikeButton()); //handleDeleteCard


    this._deleteButton = this._element.querySelector('.element__delete');

    this._deleteButton.addEventListener('click', e => this._handleDeleteCard(e)); //handlePreviewPicture


    this._element.querySelector('.element__img').addEventListener('click', () => this._handlePreviewPicture());
  }

  _handlePreviewPicture() {
    this._handleCardClick({
      link: this._link,
      name: this._name
    });
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle('element__like-button_active');
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  renderCard() {
    console.log('renderCard');
    this._element = this._template.cloneNode(true);
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__img').style.backgroundImage = "url(".concat(this._link, ")");

    this._addEventListeners();

    return this._element;
  }

}

/***/ }),

/***/ "./src/components/popup.js":
/*!*********************************!*\
  !*** ./src/components/popup.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Popup; }
/* harmony export */ });
class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  setEventListeners() {
    //click event listener to the overlay &  close icon
    this._popup.addEventListener('click', evt => {
      if (evt.target.matches('.popup_is-open') || evt.target.matches('.popup__close')) {
        this.close();
      }
    });
  }

  open() {
    this._popup.classList.add('popup_is-open');

    document.addEventListener('keyup', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_is-open');

    document.removeEventListener('keyup', this._handleEscClose);
  }

  _handleEscClose(evt) {
    evt.preventDefault();

    if (evt.key === 'Escape') {
      this.close();
    }
  }

}

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialCards": function() { return /* binding */ initialCards; }
/* harmony export */ });
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ "./src/pages/index.css");
/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card.js */ "./src/components/card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");







const initialCards = [{
  name: 'Yosemite Valley',
  link: 'https://code.s3.yandex.net/web-code/yosemite.jpg'
}, {
  name: 'Lake Louise',
  link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg'
}, {
  name: 'Bald Mountains',
  link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg'
}, {
  name: 'Latemar',
  link: 'https://code.s3.yandex.net/web-code/latemar.jpg'
}, {
  name: 'Vanoise National Park',
  link: 'https://code.s3.yandex.net/web-code/vanoise.jpg'
}, {
  name: 'Lago di Braies',
  link: 'https://code.s3.yandex.net/web-code/lago.jpg'
}];
const pageSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; //wrappers

const popupFormEdit = document.querySelector('.popup__form_type_edit');
const popupFormAdd = document.querySelector('.popup__form_type_add-place'); //buttonsand other DOM

const formButtonEdit = document.querySelector('.profile__edit');
const profileButtonAdd = document.querySelector('.profile__add-button'); //form data

const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_description');
const popupAddInputTitle = document.querySelector('.popup__input_type_title');
const popupAddInputlink = document.querySelector('.popup__input_type_link');
const cardContainer = document.querySelector('.elements');
const cardTemplateSelector = '#element-template'; //instances of the classes

const editProfileValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](pageSettings, popupFormEdit);
const addCardFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](pageSettings, popupFormAdd);
const userData = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  userNameSelector: '.profile__value_type_name',
  userJobSelector: '.profile__value_type_description'
});
const popupOpenImg = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__["default"]('.popup_type_img');
const addACardPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"](submitAddForm, '.popup_type_add-card');
const editProfilePopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"](submitEditForm, '.popup_type_edit');

function creatCard(card) {
  const newCard = new _components_card_js__WEBPACK_IMPORTED_MODULE_1__["default"](card, cardTemplateSelector, popupOpenImg.open);
  return newCard.renderCard();
}

const cardSection = new _components_Section_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  items: initialCards,
  renderer: data => {
    cardSection.addItem(creatCard(data));
  }
}, '.elements');

function submitAddForm(cardData) {
  cardSection.addItem(creatCard(cardData));
}

function submitEditForm(_ref) {
  let {
    name,
    job
  } = _ref;
  userData.setUserInfo({
    name,
    job
  });
}

formButtonEdit.addEventListener('click', () => {
  inputName.value = userData.getUserInfo().name;
  inputJob.value = userData.getUserInfo().job;
  editProfileValidator.updateFormValidation();
  editProfilePopup.open();
});
profileButtonAdd.addEventListener('click', () => {
  popupFormAdd.reset();
  addCardFormValidator.updateFormValidation();
  addACardPopup.open();
}); //initialize instances

cardSection.renderItems();
popupOpenImg.setEventListeners();
addACardPopup.setEventListeners();
editProfilePopup.setEventListeners();
editProfileValidator.enableValidation();
addCardFormValidator.enableValidation();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBTkQ7QUFRQXNELGdCQUFnQixDQUFDaEYsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLE1BQU07QUFDL0M4RSxFQUFBQSxZQUFZLENBQUMzRCxLQUFiO0FBQ0FvRSxFQUFBQSxvQkFBb0IsQ0FBQ2hILG9CQUFyQjtBQUNBbUgsRUFBQUEsYUFBYSxDQUFDaEUsSUFBZDtBQUNELENBSkQsR0FNQTs7QUFDQXVFLFdBQVcsQ0FBQzlELFdBQVo7QUFDQXNELFlBQVksQ0FBQ2hGLGlCQUFiO0FBQ0FpRixhQUFhLENBQUNqRixpQkFBZDtBQUNBbUYsZ0JBQWdCLENBQUNuRixpQkFBakI7QUFDQTZFLG9CQUFvQixDQUFDckYsZ0JBQXJCO0FBQ0FzRixvQkFBb0IsQ0FBQ3RGLGdCQUFyQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvY2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCkge1xuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3I7XG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBzZXR0aW5ncy5lcnJvckNsYXNzO1xuXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnRzID0gWy4uLnRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcildO1xuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcbiAgfVxuICB1cGRhdGVGb3JtVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dClcbiAgICB9KVxuXG4gICAgdGhpcy50b2dnbGVCdXR0b25TdGF0ZSh0aGlzLl9pbnB1dEVsZW1lbnRzLCB0aGlzLl9idXR0b25FbGVtZW50KTtcbiAgfVxuXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xuXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSB2YWxpZGF0aW9uTWVzc2FnZTtcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgfVxuXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XG5cbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gIH1cblxuICB0b2dnbGVCdXR0b25TdGF0ZShpbnB1dEVsZW1lbnRzLCBidXR0b25FbGVtZW50KSB7XG4gICAgY29uc3QgaGFzSW52YWxpZElucHV0ID0gaW5wdXRFbGVtZW50cy5zb21lKGlucHV0RWxlbWVudCA9PiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKTtcblxuICAgIGlmIChoYXNJbnZhbGlkSW5wdXQpIHtcbiAgICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKVxuICAgICAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKVxuICAgICAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KSB7XG4gICAgaWYgKGlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50LCBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBpbnB1dEVsZW1lbnRzID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpKTtcbiAgICBjb25zdCBidXR0b25FbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG5cbiAgICBpbnB1dEVsZW1lbnRzLmZvckVhY2goaW5wdXRFbGVtZW50ID0+IHtcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7XG4gICAgICAgIHRoaXMudG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRFbGVtZW50cywgYnV0dG9uRWxlbWVudCk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyBFbmFibGUgZm9ybSB2YWxpZGF0aW9uXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vcG9wdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3RvcihzdWJtaXRGb3JtLCBwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5fc3VibWl0Rm9ybSA9IHN1Ym1pdEZvcm07XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcbiAgICB0aGlzLl9pbnB1dEZpZWxkc0RhdGEgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2lucHV0Jyk7XG4gIH1cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgLy9hZGQgdGhlIHN1Ym1pdCBldmVudCBoYW5kbGVyIHRvIHRoZSBmb3JtXG4gICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9zdWJtaXRGb3JtKHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgdGhpcy5faW5wdXRGaWVsZHNEYXRhT2JqZWN0ID0ge307XG4gICAgLy9jb2xsZWN0cyBkYXRhIGZyb20gYWxsICBpbnB1dCBmaWVsZHNcbiAgICB0aGlzLl9pbnB1dEZpZWxkc0RhdGEuZm9yRWFjaChcbiAgICAgIChpbnB1dCkgPT4gKFxuICAgICAgICB0aGlzLl9pbnB1dEZpZWxkc0RhdGFPYmplY3RbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZVxuICAgICAgKVxuICAgICk7XG4gICAgLy8gcmV0dXJucyBkYXRhIGFzIGFuIG9iamVjdFxuICAgIGNvbnNvbGUubG9nKCdpbnB1dHMnLCB0aGlzLl9pbnB1dEZpZWxkc0RhdGFPYmplY3QpO1xuICAgIHJldHVybiB0aGlzLl9pbnB1dEZpZWxkc0RhdGFPYmplY3Q7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9mb3JtRWxlbWVudC5yZXNldCgpO1xuICAgIHN1cGVyLmNsb3NlKCk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vcG9wdXAnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XG5cbiAgb3BlbiA9ICh7bGluaywgbmFtZX0pID0+IHtcbiAgICBjb25zdCBpbWdFbGVtZW50ID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWcnKTtcbiAgICBjb25zdCBpbWdDYXB0aW9uID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19jYXB0aW9uJyk7XG5cbiAgICBpbWdFbGVtZW50LnNyYyA9IGxpbms7XG4gICAgaW1nRWxlbWVudC5hbHQgPSBgSW1hZ2UgJHtuYW1lfWA7XG4gICAgaW1nQ2FwdGlvbi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgc3VwZXIub3BlbigpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY2FyZFRlbXBsYXRlU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9pbml0aWFsQXJyYXkgPSBpdGVtcztcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FyZFRlbXBsYXRlU2VsZWN0b3IpO1xuICAgIC8vY29uc29sZS5sb2coXCJpbml0aWFsQXJyYXlcIiwgdGhpcy5faW5pdGlhbEFycmF5KTtcbiAgfVxuICAvL3JlbmRlciBlYWNoIGVsZW1lbnQgb24gYSBwYWdlXG4gIHJlbmRlckl0ZW1zKCkge1xuICAgIGNvbnNvbGUubG9nKCdzZWN0aW9uUmVuZGVyJylcbiAgICB0aGlzLl9pbml0aWFsQXJyYXkuZm9yRWFjaCh0aGlzLl9yZW5kZXJlcik7XG4gIH1cbiAgLy90YWtlcyBhIERPTSBlbGVtZW50IGFuZCBhZGRzIGl0IHRvIHRoZSBjb250YWluZXJcbiAgYWRkSXRlbShpdGVtKSB7XG4gICAgY29uc29sZS5sb2coJ3NlY3Rpb25BZGRJdGVtJyk7XG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoaXRlbSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcbiAgY29uc3RydWN0b3IoeyB1c2VyTmFtZVNlbGVjdG9yLCB1c2VySm9iU2VsZWN0b3IgfSkge1xuICAgIHRoaXMuX3VzZXJOYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlck5hbWVTZWxlY3Rvcik7XG4gICAgdGhpcy5fdXNlckpvYkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVzZXJKb2JTZWxlY3Rvcik7XG4gIH1cbiAgLy9tZXRob2Qgd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdXNlcih0byBkaXNwbGF5IHRoZSB1c2VyIGRhdGEgaW4gdGhlIG9wZW4gZm9ybSlcbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMuX3VzZXJOYW1lRWxlbWVudC50ZXh0Q29udGVudCxcbiAgICAgIGpvYjogdGhpcy5fdXNlckpvYkVsZW1lbnQudGV4dENvbnRlbnRcbiAgICB9O1xuICB9XG4gIC8vbWV0aG9kIHdoaWNoIHRha2VzIG5ldyB1c2VyIGRhdGEgYW5kIGFkZHMgaXQgb24gdGhlIHBhZ2VcbiAgc2V0VXNlckluZm8oe25hbWUsIGpvYn0pIHtcbiAgICB0aGlzLl91c2VyTmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRoaXMuX3VzZXJKb2JFbGVtZW50LnRleHRDb250ZW50ID0gam9iO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoY2FyZERhdGEsIGNhcmRUZW1wbGF0ZVNlbGVjdG9yLCBoYW5kbGVDYXJkQ2xpY2spIHtcbiAgICB0aGlzLl9uYW1lID0gY2FyZERhdGEubmFtZTtcbiAgICB0aGlzLl9saW5rID0gY2FyZERhdGEubGluaztcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FyZFRlbXBsYXRlU2VsZWN0b3IpLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnQnKTtcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gIH1cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIC8vaGFuZGxlTGlrZUJ1dHRvblxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19saWtlLWJ1dHRvbicpO1xuICAgIHRoaXMuX2xpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgdGhpcy5faGFuZGxlTGlrZUJ1dHRvbigpXG4gICAgKTtcbiAgICAvL2hhbmRsZURlbGV0ZUNhcmRcbiAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19kZWxldGUnKTtcbiAgICB0aGlzLl9kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT5cbiAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQoZSlcbiAgICApO1xuICAgIC8vaGFuZGxlUHJldmlld1BpY3R1cmVcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19pbWcnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5faGFuZGxlUHJldmlld1BpY3R1cmUoKVxuICAgICAgKTtcbiAgfVxuICBfaGFuZGxlUHJldmlld1BpY3R1cmUoKSB7XG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHtsaW5rIDogdGhpcy5fbGluaywgbmFtZSA6IHRoaXMuX25hbWV9KTtcbiAgfVxuXG4gIF9oYW5kbGVMaWtlQnV0dG9uKCkge1xuICAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZWxlbWVudF9fbGlrZS1idXR0b25fYWN0aXZlJylcbiAgfVxuXG4gIF9oYW5kbGVEZWxldGVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICByZW5kZXJDYXJkKCkge1xuICAgIGNvbnNvbGUubG9nKCdyZW5kZXJDYXJkJyk7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX3RlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X190aXRsZScpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19pbWcnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5fbGlua30pYDtcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcblxuICB9XG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIC8vY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIG92ZXJsYXkgJiAgY2xvc2UgaWNvblxuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgaWYgKGV2dC50YXJnZXQubWF0Y2hlcygnLnBvcHVwX2lzLW9wZW4nKSB8fCBldnQudGFyZ2V0Lm1hdGNoZXMoJy5wb3B1cF9fY2xvc2UnKSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXBfaXMtb3BlbicpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpXG4gIH1cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXBfaXMtb3BlbicpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpXG4gIH1cblxuICBfaGFuZGxlRXNjQ2xvc2UoZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoZXZ0LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9wYWdlcy9pbmRleC5jc3MnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkLmpzJztcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyc7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyc7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzJztcbmltcG9ydCBVc2VySW5mbyBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzJztcblxuXG5leHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgbmFtZTogJ1lvc2VtaXRlIFZhbGxleScsXG4gICAgbGluazogJ2h0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3lvc2VtaXRlLmpwZycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTGFrZSBMb3Vpc2UnLFxuICAgIGxpbms6ICdodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGcnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0JhbGQgTW91bnRhaW5zJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvYmFsZC1tb3VudGFpbnMuanBnJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdMYXRlbWFyJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGF0ZW1hci5qcGcnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1Zhbm9pc2UgTmF0aW9uYWwgUGFyaycsXG4gICAgbGluazogJ2h0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdMYWdvIGRpIEJyYWllcycsXG4gICAgbGluazogJ2h0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhZ28uanBnJyxcbiAgfSxcbl07XG5jb25zdCBwYWdlU2V0dGluZ3MgPSB7XG4gIGZvcm1TZWxlY3RvcjogJy5wb3B1cF9fZm9ybScsXG4gIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX2lucHV0JyxcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6ICcucG9wdXBfX3NhdmUnLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX3NhdmVfZGlzYWJsZWQnLFxuICBpbnB1dEVycm9yQ2xhc3M6ICdwb3B1cF9faW5wdXRfdHlwZV9lcnJvcicsXG4gIGVycm9yQ2xhc3M6ICdwb3B1cF9fZXJyb3JfdmlzaWJsZScsXG59O1xuLy93cmFwcGVyc1xuY29uc3QgcG9wdXBGb3JtRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybV90eXBlX2VkaXQnKTtcbmNvbnN0IHBvcHVwRm9ybUFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybV90eXBlX2FkZC1wbGFjZScpO1xuLy9idXR0b25zYW5kIG90aGVyIERPTVxuY29uc3QgZm9ybUJ1dHRvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fZWRpdCcpO1xuY29uc3QgcHJvZmlsZUJ1dHRvbkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hZGQtYnV0dG9uJyk7XG4vL2Zvcm0gZGF0YVxuY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbnB1dF90eXBlX25hbWUnKTtcbmNvbnN0IGlucHV0Sm9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbnB1dF90eXBlX2Rlc2NyaXB0aW9uJyk7XG5jb25zdCBwb3B1cEFkZElucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2lucHV0X3R5cGVfdGl0bGUnKTtcbmNvbnN0IHBvcHVwQWRkSW5wdXRsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbnB1dF90eXBlX2xpbmsnKTtcbmNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHMnKTtcbmNvbnN0IGNhcmRUZW1wbGF0ZVNlbGVjdG9yID0gJyNlbGVtZW50LXRlbXBsYXRlJztcbi8vaW5zdGFuY2VzIG9mIHRoZSBjbGFzc2VzXG5jb25zdCBlZGl0UHJvZmlsZVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHBhZ2VTZXR0aW5ncywgcG9wdXBGb3JtRWRpdCk7XG5jb25zdCBhZGRDYXJkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHBhZ2VTZXR0aW5ncywgcG9wdXBGb3JtQWRkKTtcbmNvbnN0IHVzZXJEYXRhID0gbmV3IFVzZXJJbmZvKHsgdXNlck5hbWVTZWxlY3RvcjogJy5wcm9maWxlX192YWx1ZV90eXBlX25hbWUnLCB1c2VySm9iU2VsZWN0b3I6ICcucHJvZmlsZV9fdmFsdWVfdHlwZV9kZXNjcmlwdGlvbicgfSk7XG5cbmNvbnN0IHBvcHVwT3BlbkltZyA9IG5ldyBQb3B1cFdpdGhJbWFnZSgnLnBvcHVwX3R5cGVfaW1nJyk7XG5cbmNvbnN0IGFkZEFDYXJkUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybShzdWJtaXRBZGRGb3JtLCAnLnBvcHVwX3R5cGVfYWRkLWNhcmQnKTtcblxuY29uc3QgZWRpdFByb2ZpbGVQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKHN1Ym1pdEVkaXRGb3JtLCAnLnBvcHVwX3R5cGVfZWRpdCcpO1xuXG5mdW5jdGlvbiBjcmVhdENhcmQoY2FyZCkge1xuICBjb25zdCBuZXdDYXJkID0gbmV3IENhcmQoY2FyZCwgY2FyZFRlbXBsYXRlU2VsZWN0b3IsIHBvcHVwT3BlbkltZy5vcGVuKTtcbiAgcmV0dXJuIG5ld0NhcmQucmVuZGVyQ2FyZCgpO1xufVxuXG5jb25zdCBjYXJkU2VjdGlvbiA9IG5ldyBTZWN0aW9uKHtcbiAgaXRlbXM6IGluaXRpYWxDYXJkcyxcblxuICByZW5kZXJlcjogKGRhdGEpID0+IHtcbiAgICBjYXJkU2VjdGlvbi5hZGRJdGVtKGNyZWF0Q2FyZChkYXRhKSk7XG4gIH0sXG59LFxuICAnLmVsZW1lbnRzJ1xuKVxuXG5mdW5jdGlvbiBzdWJtaXRBZGRGb3JtKGNhcmREYXRhKSB7XG4gIGNhcmRTZWN0aW9uLmFkZEl0ZW0oXG4gICAgY3JlYXRDYXJkKGNhcmREYXRhKSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEVkaXRGb3JtKHsgbmFtZSwgam9iIH0pIHtcbiAgdXNlckRhdGEuc2V0VXNlckluZm8oeyBuYW1lLCBqb2IgfSk7XG59XG5cbmZvcm1CdXR0b25FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpbnB1dE5hbWUudmFsdWUgPSB1c2VyRGF0YS5nZXRVc2VySW5mbygpLm5hbWU7XG4gIGlucHV0Sm9iLnZhbHVlID0gdXNlckRhdGEuZ2V0VXNlckluZm8oKS5qb2I7XG5cbiAgZWRpdFByb2ZpbGVWYWxpZGF0b3IudXBkYXRlRm9ybVZhbGlkYXRpb24oKTtcbiAgZWRpdFByb2ZpbGVQb3B1cC5vcGVuKCk7XG59KTtcblxucHJvZmlsZUJ1dHRvbkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcG9wdXBGb3JtQWRkLnJlc2V0KCk7XG4gIGFkZENhcmRGb3JtVmFsaWRhdG9yLnVwZGF0ZUZvcm1WYWxpZGF0aW9uKCk7XG4gIGFkZEFDYXJkUG9wdXAub3BlbigpO1xufSk7XG5cbi8vaW5pdGlhbGl6ZSBpbnN0YW5jZXNcbmNhcmRTZWN0aW9uLnJlbmRlckl0ZW1zKClcbnBvcHVwT3BlbkltZy5zZXRFdmVudExpc3RlbmVycygpO1xuYWRkQUNhcmRQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuZWRpdFByb2ZpbGVQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuZWRpdFByb2ZpbGVWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuYWRkQ2FyZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuIl0sIm5hbWVzIjpbIkZvcm1WYWxpZGF0b3IiLCJjb25zdHJ1Y3RvciIsInNldHRpbmdzIiwiZm9ybUVsZW1lbnQiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybUVsZW1lbnQiLCJfaW5wdXRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfYnV0dG9uRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1cGRhdGVGb3JtVmFsaWRhdGlvbiIsImZvckVhY2giLCJpbnB1dCIsIl9oaWRlSW5wdXRFcnJvciIsInRvZ2dsZUJ1dHRvblN0YXRlIiwiX3Nob3dJbnB1dEVycm9yIiwiaW5wdXRFbGVtZW50IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJlcnJvckVsZW1lbnQiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwicmVtb3ZlIiwiaW5wdXRFbGVtZW50cyIsImJ1dHRvbkVsZW1lbnQiLCJoYXNJbnZhbGlkSW5wdXQiLCJzb21lIiwidmFsaWRpdHkiLCJ2YWxpZCIsImRpc2FibGVkIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl9zZXRFdmVudExpc3RlbmVycyIsIkFycmF5IiwiZnJvbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbmFibGVWYWxpZGF0aW9uIiwiUG9wdXAiLCJQb3B1cFdpdGhGb3JtIiwic3VibWl0Rm9ybSIsInBvcHVwU2VsZWN0b3IiLCJfc3VibWl0Rm9ybSIsIl9wb3B1cCIsIl9pbnB1dEZpZWxkc0RhdGEiLCJzZXRFdmVudExpc3RlbmVycyIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiX2dldElucHV0VmFsdWVzIiwiY2xvc2UiLCJfaW5wdXRGaWVsZHNEYXRhT2JqZWN0IiwibmFtZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJsaW5rIiwiaW1nRWxlbWVudCIsImltZ0NhcHRpb24iLCJzcmMiLCJhbHQiLCJvcGVuIiwiU2VjdGlvbiIsImNhcmRUZW1wbGF0ZVNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9pbml0aWFsQXJyYXkiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiZG9jdW1lbnQiLCJyZW5kZXJJdGVtcyIsImFkZEl0ZW0iLCJpdGVtIiwicHJlcGVuZCIsIlVzZXJJbmZvIiwidXNlck5hbWVTZWxlY3RvciIsInVzZXJKb2JTZWxlY3RvciIsIl91c2VyTmFtZUVsZW1lbnQiLCJfdXNlckpvYkVsZW1lbnQiLCJnZXRVc2VySW5mbyIsImpvYiIsInNldFVzZXJJbmZvIiwiQ2FyZCIsImNhcmREYXRhIiwiaGFuZGxlQ2FyZENsaWNrIiwiX25hbWUiLCJfbGluayIsIl90ZW1wbGF0ZSIsImNvbnRlbnQiLCJfaGFuZGxlQ2FyZENsaWNrIiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwiX2xpa2VCdXR0b24iLCJfZWxlbWVudCIsIl9oYW5kbGVMaWtlQnV0dG9uIiwiX2RlbGV0ZUJ1dHRvbiIsImUiLCJfaGFuZGxlRGVsZXRlQ2FyZCIsIl9oYW5kbGVQcmV2aWV3UGljdHVyZSIsInRvZ2dsZSIsInJlbmRlckNhcmQiLCJjbG9uZU5vZGUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJ0YXJnZXQiLCJtYXRjaGVzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleSIsImluaXRpYWxDYXJkcyIsInBhZ2VTZXR0aW5ncyIsImZvcm1TZWxlY3RvciIsInBvcHVwRm9ybUVkaXQiLCJwb3B1cEZvcm1BZGQiLCJmb3JtQnV0dG9uRWRpdCIsInByb2ZpbGVCdXR0b25BZGQiLCJpbnB1dE5hbWUiLCJpbnB1dEpvYiIsInBvcHVwQWRkSW5wdXRUaXRsZSIsInBvcHVwQWRkSW5wdXRsaW5rIiwiY2FyZENvbnRhaW5lciIsImVkaXRQcm9maWxlVmFsaWRhdG9yIiwiYWRkQ2FyZEZvcm1WYWxpZGF0b3IiLCJ1c2VyRGF0YSIsInBvcHVwT3BlbkltZyIsImFkZEFDYXJkUG9wdXAiLCJzdWJtaXRBZGRGb3JtIiwiZWRpdFByb2ZpbGVQb3B1cCIsInN1Ym1pdEVkaXRGb3JtIiwiY3JlYXRDYXJkIiwiY2FyZCIsIm5ld0NhcmQiLCJjYXJkU2VjdGlvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9