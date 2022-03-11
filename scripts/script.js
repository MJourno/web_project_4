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
const inputUser = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector(
  '.popup__input_type_description'
);

const popupAddInputTitle = document.querySelector('.popup__input_type_title');
const popupAddInputlink = document.querySelector('.popup__input_type_link');

const userData = new UserInfo({ name: '.profile__value_type_name', job: '.profile__value_type_description' });

const popupOpenImg = new PopupWithImage('.popup_type_img');
popupOpenImg.setEventListeners();

//add card form
const AddACardPopup = new PopupWithForm(submitAddForm, '.popup_type_add-card');
  /*(data) => {
    creatCard(data, '.elements');
  });*/
  function submitAddForm () {
    creatCard(
      {
        name: popupAddInputTitle.value,
        link: popupAddInputlink.value,
      },
      cardContainer,
    );

    AddACardPopup.close();

  }

AddACardPopup.setEventListeners();

//edit form

/*const editProfilePopup = new PopupWithForm('.popup_type_edit', () => {
  console.log(userData);
  userData.setUserInfo({
    name: name.value,
    job: job.value
  });
});*/
const editProfilePopup = new PopupWithForm(submitEditForm, '.popup_type_edit');
editProfilePopup.setEventListeners();

function submitEditForm () {
  const name = document.querySelector('.profile__value_type_name');
  const job = document.querySelector('.profile__value_type_description');

  userData.setUserInfo({
    name: name.value,
    job: job.value,
  });
  //userData.setUserInfo(editProfilePopup.getInputValues());

  editProfilePopup.close();
}


/*function submitEditForm (evt) {
  evt.preventDefault();
  const Name = document.querySelector('.profile__value_type_name');
  const Job = document.querySelector('.profile__value_type_description');
  userData.setUserInfo({
    name: name.value,
    job: job.value,
  });
  editProfilePopup.close();
}*/

const userName = document.querySelector('.profile__value_type_name');
const userJob = document.querySelector('.profile__value_type_description');

const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_description');

//const popupOpenForm = new PopupWithForm()
//const popupImg = document.querySelector('.popup__img');
//const popupCaption = document.querySelector('.popup__caption');

/*function fillInputs() {
  inputName.value = userName.textContent;
  inputJob.value = userJob.textContent;
}*/

/*popupFormEdit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  //userName.textContent = inputName.value;
  //userJob.textContent = inputJob.value;
  editProfilePopup.close();
});*/

/*// create a form instance
const form = new SubmitForm({
  formSelector: ".form-template",
});*/

// generate form markup
//const formElement = form._getInputValues();

// initialize a class responsible
// for adding the form to the page
/*const formRenderer = new Section({
    data: []  // we can pass an argument with an empty array
}, ".elements");*/

// add the form to the page
//formRenderer.addItem(formElement);


formButtonEdit.addEventListener('click', () => {
  //fillInputs();
  //console.log("userData", userData.getUserInfo());
  inputName.value = userData.getUserInfo().name;
  inputJob.value = userData.getUserInfo().job;

  editProfileValidator.updateFormValidation();
  editProfilePopup.setEventListeners();
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
  //return newCard.renderCard();
  cardContainer.prepend(newCard.renderCard());

  /*const cardSection = new Section ({
    newCard,
    renderer: element => {
      const card = creatCard(element)
      cardSection.addItem(card)
    }
  },
  cardContainer)*/
}

initialCards.forEach((data) => {
  creatCard(data, cardContainer);
});

/*const formRenderer = new Section({
  data: []  // we can pass an argument with an empty array
}, ".form-section");
// add the form to the page
formRenderer.setItem(formElement);*/

const cardSection = new Section ({
  //newCard,
  renderer: element => {
    const card = creatCard(element)
    cardSection.addItem(card)
  }
  },
  'elements'
)
//const items = initialCards;
/*const cardSection = new Section(
    {items,
    renderer : creatCard}
  ,
  cardContainer
)
cardSection.renderItems()*/


// enable validation
const editProfileValidator = new FormValidator(pageSettings, popupFormEdit);
editProfileValidator.enableValidation();
const addCardFormValidator = new FormValidator(pageSettings, popupFormAdd);
addCardFormValidator.enableValidation();
