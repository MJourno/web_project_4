const formUser = document.querySelector('.profile__value_type_name');
const formDescription = document.querySelector('.profile__value_type_description');
const formButtonEdit = document.querySelector('.button_edit');

const formButtonClose = document.querySelector('.popup__close');
const saveButton = document.querySelector('.popup__save');
const inputUser = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector('.popup__input_type_description');
const form = document.querySelector('.popup');

formButtonEdit.addEventListener('click', openForm);

formButtonClose.addEventListener('click', closeForm);

function openForm() {
  form.classList.add('popup_is-open');
  fillInputs ();
}

function fillInputs () {
  inputUser.value = formUser.textContent;
  inputDescription.value = formDescription.textContent;
  }

function closeForm() {
  form.classList.remove('popup_is-open');
}
