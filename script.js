const formUser = document.querySelector('.profile__value_type_name');
const formDescription = document.querySelector('.profile__value_type_description');
const formButtonEdit = document.querySelector('.profile__edit');
const formButtonClose = document.querySelector('.popup__close');
const saveButton = document.querySelector('.popup__save');
const inputUser = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector('.popup__input_type_description');
const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__container');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  formUser.textContent = inputUser.value;
  formDescription.textContent = inputDescription.value;
  closeForm();
});

formButtonEdit.addEventListener('click', openForm);

formButtonClose.addEventListener('click', closeForm);

function openForm() {
  popup.classList.add('popup_is-open');
  fillInputs();
}

function fillInputs() {
  inputUser.value = formUser.textContent;
  inputDescription.value = formDescription.textContent;
}

function closeForm() {
  popup.classList.remove('popup_is-open');
}
