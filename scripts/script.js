import card from "./card.js";
import FormValidator from "./FormValidator.js";
import {openPopup} from "./utils.js";
import { closePopup } from "./utils.js";

//import { checkInitialFormValidity } from "./validate.js";
//import { toggleButtonState} from "./validate.js";
//import {checkInputValidity} from "./validate.js";
//import {checkInitialFormValidity} from "./validate.js";
//import {pageSettings} from "./validate.js"

export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }

];
const pageSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
}
//wrappers
const popupEdit = document.querySelector('.popup_type_edit');
const popupFormEdit = document.querySelector('.popup__form_type_edit');
const popupFormAdd = document.querySelector('.popup__form_type_add-place');
const popupAddACard = document.querySelector('.popup_type_add-card');

const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template');

//buttonsand other DOM
const allCloseButtons = document.querySelectorAll('.popup__close');

const formButtonEdit = document.querySelector('.profile__edit');
const profileButtonAdd = document.querySelector('.profile__add-button');
const saveButton = document.querySelector('.popup__save');
const formUser = document.querySelector('.profile__value_type_name');
const formDescription = document.querySelector('.profile__value_type_description');
//template
const cardsElementTemplate = document.querySelector('#element-template').content.querySelector('.element');

//form data
const inputUser = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector('.popup__input_type_description');

const popupAddInputTitle = document.querySelector('.popup__input_type_title');
const popupAddInputlink = document.querySelector('.popup__input_type_link');

const popupOpenImg = document.querySelector('.popup_type_img');
const cardImage = document.querySelector('.element__img');
const popupImg = document.querySelector('.popup__img');
const popupCaption = document.querySelector('.popup__caption');

/*function creatCardElement(cardData) {
  const card = cardsElementTemplate.cloneNode(true);
  card.querySelector('.element__title').textContent = cardData.name;
  const cardImage = card.querySelector('.element__img')
  cardImage.style.backgroundImage = `url(${cardData.link})`;

  const likeButton = card.querySelector('.element__like-button');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('element__like-button_active')
  });

  card.querySelector('.element__delete').addEventListener('click', (event) => {
    const listItem = event.target.closest('.element');
    listItem.remove();
  });

  cardImage.addEventListener('click', (event) => {
    popupImg.src = cardData.link;
    popupImg.alt = cardData.name;
    popupCaption.textContent = cardData.name;
    openPopup(popupOpenImg);
  });

  return card;
}*/


popupAddACard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  closePopup(popupAddACard);
  const card  =  new card ({
    name:popupAddInputTitle.value,
    link:popupAddInputlink.value
  });

  const cardElement = card.render();
  popupFormAdd.reset();
  elements.prepend(card);
});

/*function closeByEscape(evt) {
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

function openPopup(popup) {
  popup.classList.add('popup_is-open')
  document.addEventListener('keydown', closeByEscape)
  document.addEventListener('click', closeByClick);
};*/

function fillInputs() {
  inputUser.value = formUser.textContent;
  inputDescription.value = formDescription.textContent;
};

/*function closePopup(popup) {
  popup.classList.remove('popup_is-open')
  document.removeEventListener('keydown', closeByEscape)
  document.removeEventListener('click', closeByClick);
};*/

popupFormEdit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  formUser.textContent = inputUser.value;
  formDescription.textContent = inputDescription.value;
  closePopup(popupEdit);
});

formButtonEdit.addEventListener('click', () => {
  fillInputs();

  (popupEdit.querySelector('form'), pageSettings);
  openPopup(popupEdit);
});

profileButtonAdd.addEventListener('click', () => {
  checkInitialFormValidity(popupAddACard.querySelector('form'), pageSettings);
   openPopup(popupAddACard);
  });

allCloseButtons.forEach(btn => btn.addEventListener('click', (evt) => {
  const openedPopup = evt.target.closest('.popup_is-open')
  closePopup(openedPopup)
}));

/*initialCards.forEach(initialCardData => {
  elements.prepend(creatCardElement(initialCardData));
});*/

function creatCard(card) {
  return new card (card, '.card-template');
}

initialCards.forEach ((card) => {
  const newCard = creatCard(card);
  newCard.render();
})

const formSelector = '.popup__form';
const formSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
}


const forms = document.querySelectorAll(formSettings.formSelector);
forms.forEach(formElement => {
  const FormValidator = new FormValidator(formSettings, formElement);

  FormValidator.enableValidation();
});
