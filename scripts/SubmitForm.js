/*export default class SubmitForm {
  constructor({ formSelector, handleFormSubmit }) {
    this._formSelector = formSelector;
    this._handleFormSubmit = handleFormSubmit;
  }
  _getTemplate() {
    const formElement = document
    .querySelector(this._formSelector)
    .content
    .querySelector(".popup__form")
    .cloneNode(true);

  return formElement;
}
_setEventListeners() {
  // when the form is submitted
  this._element.addEventListener("submit", (evt) => {
    // we'll cancel the default behavior
    evt.preventDefault();
    // and reset its fields
    this._element.reset();
  })
}
generateForm() {
  this._element = this._getTemplate(); // create an element
  this._setEventListeners(); // add listeners
  return this._element; // return the markup
}
_getInputValues() {
  // Get all field elements
  this._inputList = this._element.querySelectorAll(".form__input");

  // Create an empty object
  this._formValues = {};

  // Add the values of the fields to this object
  this._inputList.forEach(input => {
    this._formValues[input.name] = input.value;
  });

  // Return the values object
  return this._formValues;
}
}

/************************************************************/

//wrappers
//const popupEdit = document.querySelector('.popup_type_edit');
//const popupAddACard = document.querySelector('.popup_type_add-card');
//buttonsand other DOM
//const allCloseButtons = document.querySelectorAll('.popup__close');
//const formUser = document.querySelector('.profile__value_type_name');
/*const formDescription = document.querySelector(
  '.profile__value_type_description');*/
  //add card form
/*const AddACardPopup = new PopupWithForm(submitAddForm, '.popup_type_add-card');
(data) => {
  creatCard(data, '.elements');
});
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

AddACardPopup.setEventListeners();*/
//edit form

/*const editProfilePopup = new PopupWithForm('.popup_type_edit', () => {
  console.log(userData);
  userData.setUserInfo({
    name: name.value,
    job: job.value
  });
});*/
 /*userData.setUserInfo({
    name: name.value,
    job: job.value,
  });*/
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
/*function creatCard(card, cardContainer) {
  const newCard = new Card(card, cardTemplateSelector, popupOpenImg.open);
  //return newCard.renderCard();
  cardContainer.prepend(newCard.renderCard());
  const cardSection = new Section ({
    newCard,
    renderer: element => {
      const card = creatCard(element)
      cardSection.addItem(card)
    }
  },
  cardContainer)*/
}
/*const formRenderer = new Section({
  data: []  // we can pass an argument with an empty array
}, ".form-section");
// add the form to the page
formRenderer.setItem(formElement);*/

/*const cardSection = new Section ({
  //newCard,
  renderer: element => {
    const card = creatCard(element)
    cardSection.addItem(card)
  }
  },
  'elements'
)*/
//const items = initialCards;
/*const cardSection = new Section(
    {items,
    renderer : creatCard}
  ,
  cardContainer
)
cardSection.renderItems()*/
