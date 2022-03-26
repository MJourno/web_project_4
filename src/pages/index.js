import '../pages/index.css';
import Card from '../components/card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithSubmit from '../components/popupWithSubmit';
/*const initialCards = [
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
];*/
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
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_description');
const popupAddInputTitle = document.querySelector('.popup__input_type_title');
const popupAddInputlink = document.querySelector('.popup__input_type_link');
const cardContainer = document.querySelector('.elements');
const cardTemplateSelector = '#element-template';
//instances of the classes
const confirmModal = new PopupWithSubmit('.popup_type_delete-card');
const editProfileValidator = new FormValidator(pageSettings, popupFormEdit);
const addCardFormValidator = new FormValidator(pageSettings, popupFormAdd);
const userData = new UserInfo({ userNameSelector: '.profile__value_type_name', userJobSelector: '.profile__value_type_description' });

const popupOpenImg = new PopupWithImage('.popup_type_img');

const addACardPopup = new PopupWithForm(submitAddForm, '.popup_type_add-card');

const editProfilePopup = new PopupWithForm(submitEditForm, '.popup_type_edit');

function creatCard(card) {
  const newCard = new Card(card, cardTemplateSelector, popupOpenImg.open,
    {
      handleDeleteCard: (id) => {
        console.log('123456', card);
        confirmModal.open()

        confirmModal.setAction(() => {
          //submit modal
          api.deleteCard(id)
            .then(res => {
              console.log('deleteCard', res)
              //remove from DOM

            })
        })

      }
    }
  );
  return newCard.renderCard(card);
}

const cardSection = new Section({
  renderer: (element) => {
    const newElement = creatCard(element);
    cardSection.addItem(newElement);
  },
},
  '.elements'
)

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "8458544b-9413-4e1b-a96c-c8cb18c89656",
    "Content-Type": "application/json"
  }
});

api.getInitialCards()
  .then(res => {
    cardSection.renderItems(res)
    //console.log('getInitialCards', res);
  })

api.loadUserInfo()
  .then(res => {
    userData.setUserInfo({ name: res.name, about: res.about });
    //console.log('loadUserInfo', res);
  })

function submitAddForm(cardData) {
  console.log('cardData', cardData);// name link
  api.createCard(cardData)
    .then(res => {
      console.log('res', res)
      cardSection.addItem(creatCard(res));
    })
}

function submitEditForm({ name, about }) {
  //console.log('submitEditForm', { name, about });
  api.editProfile({ name, about })
    .then(res => {
      //console.log('submitEditForm', res)
      userData.setUserInfo({ name: res.name, about: res.about });
    })
}

formButtonEdit.addEventListener('click', () => {
  inputName.value = userData.getUserInfo().name;
  inputJob.value = userData.getUserInfo().about;

  editProfileValidator.updateFormValidation();
  editProfilePopup.open();
});

profileButtonAdd.addEventListener('click', () => {
  popupFormAdd.reset();
  addCardFormValidator.updateFormValidation();
  addACardPopup.open();
});

//initialize instances
//cardSection.renderItems()
confirmModal.setEventListeners();
popupOpenImg.setEventListeners();
addACardPopup.setEventListeners();
editProfilePopup.setEventListeners();
editProfileValidator.enableValidation();
addCardFormValidator.enableValidation();
