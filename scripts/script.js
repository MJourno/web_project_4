import Card from './card.js';
import FormValidator from './FormValidator.js';
//import { openPopup } from './utils.js';
//import { closePopup } from './utils.js';
import PopupWithImage from './PopupWithImage.js';
//import Popup from './popup';
import '../pages/index.css';
import logoSrc from "../images/Vector.png";
const logoImg = document.getElementById('logo');
logoImg.src=logoSrc;


export const initialCards = [
  {
    name: 'Yosemite Valley',
    link: 'https://code.s3.yandex.net/web-code/yosemite.jpg',
  },
  {
    name: 'Lake Louise',
    link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg',
  },
  {
    name: 'Bald Mountains',
    link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg',
  },
  {
    name: 'Latemar',
    link: 'https://code.s3.yandex.net/web-code/latemar.jpg',
  },
  {
    name: 'Vanoise National Park',
    link: 'https://code.s3.yandex.net/web-code/vanoise.jpg',
  },
  {
    name: 'Lago di Braies',
    link: 'https://code.s3.yandex.net/web-code/lago.jpg',
  },
];
const pageSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};
//wrappers
const popupEdit = document.querySelector('.popup_type_edit');
const popupFormEdit = document.querySelector('.popup__form_type_edit');
const popupFormAdd = document.querySelector('.popup__form_type_add-place');
const popupAddACard = document.querySelector('.popup_type_add-card');

//buttonsand other DOM
const allCloseButtons = document.querySelectorAll('.popup__close');

const formButtonEdit = document.querySelector('.profile__edit');
const profileButtonAdd = document.querySelector('.profile__add-button');
const formUser = document.querySelector('.profile__value_type_name');
const formDescription = document.querySelector(
  '.profile__value_type_description');

//form data
const inputUser = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector(
  '.popup__input_type_description'
);

const popupAddInputTitle = document.querySelector('.popup__input_type_title');
const popupAddInputlink = document.querySelector('.popup__input_type_link');

const popupOpenImg = new PopupWithImage('.popup_type_img')
popupOpenImg.setEventListeners();



const popupImg = document.querySelector('.popup__img');
const popupCaption = document.querySelector('.popup__caption');

/*function fillInputs() {
  inputUser.value = formUser.textContent;
  inputDescription.value = formDescription.textContent;
}*/

/*popupFormEdit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  formUser.textContent = inputUser.value;
  formDescription.textContent = inputDescription.value;
  closePopup(popupEdit);
});*/

/*formButtonEdit.addEventListener('click', () => {
  fillInputs();

  editProfileValidator.updateFormValidation();
  openPopup(popupEdit);
});*/

/*profileButtonAdd.addEventListener('click', () => {
  popupFormAdd.reset();
  addCardFormValidator.updateFormValidation();
  openPopup(popupAddACard);
});*/

/*allCloseButtons.forEach((btn) =>
  btn.addEventListener('click', (evt) => {
    const openedPopup = evt.target.closest('.popup_is-open');
    closePopup(openedPopup);
  }),
);*/

/*function handlePreviewPopup(link, name) {
  openPopup(popupOpenImg);
  popupImg.src = this._link;
  popupImg.alt = this._name;
  popupCaption.textContent = name;
}*/
//
const cardContainer = document.querySelector('.elements');
const cardTemplateSelector = '#element-template';
//

/*popupFormAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();

  creatCard(
    {
      name: popupAddInputTitle.value,
      link: popupAddInputlink.value,
    },
    cardContainer,
  );

  closePopup(popupAddACard);
});*/

function creatCard(card, cardContainer) {
  const newCard = new Card(card, cardTemplateSelector, popupOpenImg.open);
  cardContainer.prepend(newCard.renderCard());
}

initialCards.forEach((data) => {
  creatCard(data, cardContainer);
});

const editProfileValidator = new FormValidator(pageSettings, popupFormEdit);
editProfileValidator.enableValidation();
const addCardFormValidator = new FormValidator(pageSettings, popupFormAdd);
addCardFormValidator.enableValidation();
