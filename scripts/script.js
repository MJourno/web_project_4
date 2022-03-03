import Card from './card.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import '../pages/index.css';
import Popup from './popup.js';
import logoSrc from "../images/Vector.png";
import Section from './Section.js';
import UserInfo from './UserInfo.js';


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
//const popupEdit = document.querySelector('.popup_type_edit');
const popupFormEdit = document.querySelector('.popup__form_type_edit');
const popupFormAdd = document.querySelector('.popup__form_type_add-place');
//const popupAddACard = document.querySelector('.popup_type_add-card');

//buttonsand other DOM
//const allCloseButtons = document.querySelectorAll('.popup__close');

const formButtonEdit = document.querySelector('.profile__edit');
const profileButtonAdd = document.querySelector('.profile__add-button');
//const formUser = document.querySelector('.profile__value_type_name');
/*const formDescription = document.querySelector(
  '.profile__value_type_description');*/

//form data
//const inputUser = document.querySelector('.popup__input_type_name');
/*const inputDescription = document.querySelector(
  '.popup__input_type_description'
);*/

//const popupAddInputTitle = document.querySelector('.popup__input_type_title');
//const popupAddInputlink = document.querySelector('.popup__input_type_link');

const popupOpenImg = new PopupWithImage('.popup_type_img')
popupOpenImg.setEventListeners();
//add card form
const AddACardPopup = new PopupWithForm('.popup_type_add-card');
AddACardPopup.setEventListeners();
const editProfilePopup = new PopupWithForm('.popup_type_edit');
editProfilePopup.setEventListeners();

const userName = document.querySelector('.profile__value_type_name');
const userJob = document.querySelector('.profile__value_type_description');

const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_description');

const userData = new UserInfo({name: '.profile__value_type_name', job: '.profile__value_type_description'});

//const popupOpenForm = new PopupWithForm()
//const popupImg = document.querySelector('.popup__img');
//const popupCaption = document.querySelector('.popup__caption');

function fillInputs() {
  inputName.value = userName.textContent;
  inputJob.value = userJob.textContent;
}

/*popupFormEdit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userJob.textContent = inputJob.value;
  closePopup(popupEdit);
});*/

formButtonEdit.addEventListener('click', () => {
  //fillInputs();
  //userName.value = userData.getUserInfo().name;
  //userJob.value = userData.getUserInfo().job;

  editProfileValidator.updateFormValidation();
  editProfilePopup.open();
});

profileButtonAdd.addEventListener('click', () => {
  popupFormAdd.reset();
  addCardFormValidator.updateFormValidation();
  AddACardPopup.open();
});

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
