const initialCards = [
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

//wrappers
const popupEdit = document.querySelector('.popup_type_edit');
const popupFormEdit = document.querySelector('.popup__form_type_edit');
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

const cardsElementTemplate = document.querySelector('#element-template').content.querySelector('.element');
const deleteButton = document.querySelector('#element-template').content.querySelector('.element__delete');

//form data
const inputUser = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector('.popup__input_type_description');

const popupAddInputTitle = document.querySelector('.popup__input_type_title');
const popupAddInputlink = document.querySelector('.popup__input_type_link');

const elementTitle = document.querySelector('#element-template').content.querySelector('.element__title');
const elementImg =document.querySelector('#element-template').content.querySelector('.element__img');
const popupOpenImg = document.querySelector('.popup_type_img');

function creatCardElement(cardData) {
  const card = cardsElementTemplate.cloneNode(true);
  card.querySelector('.element__title').textContent = cardData.name;
  card.querySelector('.element__img').style.backgroundImage = `url(${cardData.link})`;

  const likeButton = card.querySelector('.element__like-button');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('element__like-button_active')
  });

  card.querySelector('.element__delete').addEventListener('click', (event) => {
    const listItem = event.target.closest('.element');
    listItem.remove();
  });

  card.querySelector('.element__img').addEventListener('click', (event) => {
    document.querySelector('.popup__img').src = cardData.link;
    document.querySelector('.popup__img').alt = cardData.name;
    document.querySelector('.popup__caption').textContent = cardData.name;
    openPopup(popupOpenImg);
  });

  return card;
}

popupAddACard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  closePopup(popupAddACard);
  const cardData = {
    name:popupAddInputTitle.value,
    link:popupAddInputlink.value
  };
  const card = creatCardElement(cardData);
  document.querySelector(".popup__form_type_add-place").reset();
  elements.prepend(card);
});

function openPopup(popup) {
  popup.classList.add('popup_is-open');
};

function fillInputs() {
  inputUser.value = formUser.textContent;
  inputDescription.value = formDescription.textContent;
};

function closePopup(popup) {
  popup.classList.remove('popup_is-open')
};

popupFormEdit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  formUser.textContent = inputUser.value;
  formDescription.textContent = inputDescription.value;
  closePopup(popupEdit);
});

formButtonEdit.addEventListener('click', () => {
  fillInputs();
  checkInitialFormValidity(popupEdit.querySelector('form'), pageSettings);
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

initialCards.forEach(initialCardData => {
  elements.prepend(creatCardElement(initialCardData));
});

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (key === "Escape") {
      closePopup(popupEdit);
      closePopup(popupAddACard);
      closePopup(popupOpenImg);
  }
});

document.addEventListener('click', function(event) {
    if (
      event.target.matches('.popup')
    ) {
      closePopup(popupEdit);
      closePopup(popupAddACard);
      closePopup(popupOpenImg);
    }
  });
