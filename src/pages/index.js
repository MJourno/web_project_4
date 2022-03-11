import Card from '../components/card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import '../pages/index.css';
import logoSrc from "../images/Vector.png";
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';


const logoImg = document.getElementById('logo');
logoImg.src = logoSrc;


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
const popupFormEdit = document.querySelector('.popup__form_type_edit');
const popupFormAdd = document.querySelector('.popup__form_type_add-place');

//buttonsand other DOM
const formButtonEdit = document.querySelector('.profile__edit');
const profileButtonAdd = document.querySelector('.profile__add-button');

//form data
const inputUser = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector(
  '.popup__input_type_description'
);

const popupAddInputTitle = document.querySelector('.popup__input_type_title');
const popupAddInputlink = document.querySelector('.popup__input_type_link');

const cardContainer = document.querySelector('.elements');
const cardTemplateSelector = '#element-template';

const userData = new UserInfo({ name: '.profile__value_type_name', job: '.profile__value_type_description' });

const popupOpenImg = new PopupWithImage('.popup_type_img');
popupOpenImg.setEventListeners();

//add card form
const AddACardPopup = new PopupWithForm(submitAddForm, '.popup_type_add-card');

function submitAddForm() {
  console.log('submitAddForm');
  cardSection.addItem(
    creatCard(
      {
        name: popupAddInputTitle.value,
        link: popupAddInputlink.value,
      },
      cardContainer,
    )
  );
  ;

  AddACardPopup.close();

}
AddACardPopup.setEventListeners();

//edit form
const editProfilePopup = new PopupWithForm(submitEditForm, '.popup_type_edit');
editProfilePopup.setEventListeners();

function submitEditForm() {
  const name = document.querySelector('.popup__input_type_name');
  const job = document.querySelector('.popup__input_type_description');

  userData.setUserInfo({
    name: name.value,
    job: job.value,
  });

  editProfilePopup.close();
}


const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_description');

formButtonEdit.addEventListener('click', () => {
  console.log("userData", userData.getUserInfo());
  inputName.value = userData.getUserInfo().name;
  inputJob.value = userData.getUserInfo().job;

  editProfileValidator.updateFormValidation();
  editProfilePopup.open();
});

profileButtonAdd.addEventListener('click', () => {
  popupFormAdd.reset();
  addCardFormValidator.updateFormValidation();
  AddACardPopup.open();
});

function creatCard(card) {
  const newCard = new Card(card, cardTemplateSelector, popupOpenImg.open);
  console.log("newCard")
  return newCard.renderCard();
}

const cardSection = new Section({
  items: initialCards,

  renderer: (data) => {
    cardSection.addItem(creatCard(data));
  },
},
  '.elements'
)

cardSection.renderItems()

// enable validation
const editProfileValidator = new FormValidator(pageSettings, popupFormEdit);
editProfileValidator.enableValidation();
const addCardFormValidator = new FormValidator(pageSettings, popupFormAdd);
addCardFormValidator.enableValidation();
