import '../pages/index.css';
import Card from '../components/card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithSubmit from '../components/popupWithSubmit';

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
const popupProfileImg = document.querySelector('.popup__form_type_edit-Img');//form
//buttonsand other DOM
const formButtonEdit = document.querySelector('.profile__edit');
const profileImgEdit = document.querySelector('.profile__edit-img-button');
const profileButtonAdd = document.querySelector('.profile__add-button');
//form data
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_description');
const cardTemplateSelector = '#element-template';
//instances of the classes
const confirmModal = new PopupWithSubmit('.popup_type_delete-card');
const editProfileValidator = new FormValidator(pageSettings, popupFormEdit);
const addCardFormValidator = new FormValidator(pageSettings, popupFormAdd);
const editProfileImgValidator = new FormValidator(pageSettings, popupProfileImg);
const userData = new UserInfo({ userNameSelector: '.profile__value_type_name', userJobSelector: '.profile__value_type_description', userAvatarSelector: '.avatar' });

const popupOpenImg = new PopupWithImage('.popup_type_img');
const addACardPopup = new PopupWithForm(submitAddForm, '.popup_type_add-card');
const editProfilePopup = new PopupWithForm(submitEditForm, '.popup_type_edit');
const editProfileImgPopup = new PopupWithForm(submitEditImgForm, '.popup_type_edit-profile-img');


function creatCard(card) {
  const newCard = new Card(card, cardTemplateSelector, popupOpenImg.open,
    {
      handleDeleteCard: (id) => {
        confirmModal.open()
        confirmModal.setAction(() => {
          api.deleteCard(id)
            .then(res => {
              newCard.removeCard()
              confirmModal.close()
            })
        })
      },
      handleLikeButton: (id) => {
        const isAlreadyLiked = newCard.isLiked()

        if (isAlreadyLiked) {
          api.disLikeCard(id)
            .then(res => {
              newCard.likeCard(res.likes)
            })
        } else {
          api.likeCard(id)
            .then(res => {
              newCard.likeCard(res.likes)
            })
        }
      }
    },
    userId
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

let userId


Promise.all([api.getInitialCards(), api.loadUserInfo()])
  .then(([cardData, userInfo]) => {
    userId = userInfo._id
    cardSection.renderItems(cardData);
    userData.setUserInfo({ name: userInfo.name, about: userInfo.about });
  })
  .catch((err) => {
    console.log(err);
  })

function submitAddForm(cardData) {
  api.createCard(cardData)
    .then(res => {
      cardSection.addItem(creatCard(res));
      addACardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
}

function submitEditForm({ name, about }) {
  api.editProfile({ name, about })
    .then(res => {
      userData.setUserInfo({ name: res.name, about: res.about });
      editProfilePopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
}

function submitEditImgForm(avatar) {
  api.updateProfileImg(avatar)
    .then(res => {
      userData.setUserAvatar({ avatar: res.avatar });
      editProfileImgPopup.close();
    })
    .catch((err) => {
      console.log(err);
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

profileImgEdit.addEventListener('click', () => {
  editProfileImgValidator.updateFormValidation();
  editProfileImgPopup.open();
})

//initialize instances
editProfileImgPopup.setEventListeners();
confirmModal.setEventListeners();
popupOpenImg.setEventListeners();
addACardPopup.setEventListeners();
editProfilePopup.setEventListeners();
editProfileImgValidator.enableValidation();
editProfileValidator.enableValidation();
addCardFormValidator.enableValidation();
