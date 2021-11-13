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
const ProfileButtonAdd = document.querySelector('.profile__add-button');
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

  const popupOpenImg = document.querySelector('.popup_type_img');
  card.querySelector('.element__img').addEventListener('click', (event) => {
    document.querySelector('.popup__img').src = cardData.link;
    document.querySelector('.popup__caption').textContent = cardData.name;
    openForm(popupOpenImg);
  });

  return card;
}

popupAddACard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  closeForm(popupAddACard);
  const cardData = {
    name:popupAddInputTitle.value,
    link:popupAddInputlink.value
  };
  const card = creatCardElement(cardData);
  elements.prepend(card);
});

function openForm(popupEdit) {
  popupEdit.classList.add('popup_is-open');
  fillInputs(popupEdit);
};
function openForm(popupAddACard) {
  popupAddACard.classList.add('popup_is-open');
};

function fillInputs() {
  inputUser.value = formUser.textContent;
  inputDescription.value = formDescription.textContent;
};

function closeForm(popupEdit) {
  popupEdit.classList.remove('popup_is-open')
};

popupFormEdit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  formUser.textContent = inputUser.value;
  formDescription.textContent = inputDescription.value;
  closeForm(popupEdit);
});

formButtonEdit.addEventListener('click', () => {
  fillInputs();
  openForm(popupEdit);
});

ProfileButtonAdd.addEventListener('click', () => openForm(popupAddACard));

allCloseButtons.forEach(btn => btn.addEventListener('click', () => {
  const allPopups = document.querySelectorAll('.popup');
  allPopups.forEach(popup => popup.classList.remove('popup_is-open'))
}));

initialCards.forEach(initialCardData => {
  elements.prepend(creatCardElement(initialCardData));
});
