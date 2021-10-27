const formUser = document.querySelector('.profile__value_type_name');
const formDescription = document.querySelector('.profile__value_type_Description');
const formButtonEdit = document.querySelector('.button_edit');

const form = document.querySelector('.popup');
const formButtonClose = document.querySelector('.popup__close');

formButtonEdit.addEventListener('click', () => {
  openForm();

});

formButtonClose.addEventListener('click', closeForm);

function openForm() {
  form.classList.add('popup_is-open');
}

function closeForm() {
  form.classList.remove('popup_is-open');
}

const like = document.querySelectorAll('.element__like-button').forEach(like  => {
  like.addEventListener('click', () => {
    like.classList.toggle('element__like-button_active');
  });
});



// Let's find the form in the DOM
let formElement = document.querySelector('.popup')

// Next is the form submit handler, though
// it won't submit anywhere just yet

// Note that the function name starts with a verb
// and describes exactly what the function does
function handleProfileFormSubmit(evt) {
  // This line stops the browser from
  // submitting the form in the default way.
  evt.preventDefault();
    // Having done so, we can define our own way of submitting the form.
    // We'll explain it in more detail later.

    // Let's find the form fields in the DOM
    let nameInput = document.querySelector('.popup__input_type_name')
    let jobInput = document.querySelector('.popup__input_type_description')

    // Get the values of each field from the corresponding value property

    // Select elements where the field values will be entered

    // Insert new values using the textContent
    // property of the querySelector() method
}

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener('submit', handleProfileFormSubmit);
