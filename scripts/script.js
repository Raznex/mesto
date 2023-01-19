import {Card} from './card.js'
import {FormValidator} from "./formValidator.js";
import {initialCards} from "./cards.js";

const nameForm = document.querySelector('.profile__name');
const popupEditProfile = document.querySelector(".popup_type_profile-edit");
const popupCardElement = document.querySelector(".popup_type_card-add");
const popupPhotoElement = document.querySelector(".popup_type_photo");
const professionForm = document.querySelector('.profile__profession');
const popupOpenButton = document.querySelector(".profile__edit-button");
const popupCardOpenButton = document.querySelector('.profile__add-button');
const popupCloseButtonList = document.querySelectorAll(".popup__close");
const nameInput = popupEditProfile.querySelector(".popup__input_type_name");
const jobInput = popupEditProfile.querySelector(".popup__input_type_profession");
const titleInput = popupCardElement.querySelector('.popup__input_type_name');
const urlInput = popupCardElement.querySelector('.popup__input_type_profession');
const popupPhotoName = document.querySelector('.popup__figcaption')
const popUpPhotoOpenScreen = document.querySelector('.popup__image')
const formEditPopup = popupEditProfile.querySelector('#popup-edit-form')
const buttonSubmitCard = popupCardElement.querySelector('.popup__save')
const cardList = document.querySelector('.elements');
const formAddPopup = popupCardElement.querySelector('#popup-add-form')

const changeNameEditPopup = () => {
  nameInput.value = nameForm.textContent;
  jobInput.value = professionForm.textContent;
};
const cleanCardPopupValue = () => {
  titleInput.value = '';
  urlInput.value = '';
};

// все что после экспорта карточки для ее создания и рендера списка

function handleCardClick(title, link) {
    popUpPhotoOpenScreen.src = link
    popUpPhotoOpenScreen.alt = title
    popupPhotoName.textContent = title
    addPopup(popupPhotoElement)
}

const render = (data) => {
  const card = new Card(data, '#card-add', handleCardClick)
  cardList.prepend(card.generateCard());
}

initialCards.forEach(render);

const submitAddFormHandler = (evt) => {
  evt.preventDefault();
  const initialCard = {
    name: titleInput.value,
    link: urlInput.value
  };
  render(initialCard);
  removePopup(popupCardElement);
};

// Валидация формы

const formValidProfile = new FormValidator(formEditPopup);
const formValidCard = new FormValidator(formAddPopup);

function submitEditFormHandler(evt) {
  evt.preventDefault();
  nameForm.textContent = nameInput.value;
  professionForm.textContent = jobInput.value;
  removePopup(popupEditProfile)
};

function addPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupEscape);
};

function removePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupEscape);
};

const closePopupOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    removePopup(evt.target)
  }
}

const closePopupEscape = (evt) => {
  if (evt.key === "Escape") {
    removePopup(document.querySelector('.popup_is-opened'))
  }
};

popupCloseButtonList.forEach(btn => {
  const popup = btn.closest('.popup')
  btn.addEventListener('click', () => removePopup(popup));
})

popupOpenButton.addEventListener("click", function () {
  changeNameEditPopup();
  formValidProfile.disableValidation(false);
  addPopup(popupEditProfile);
});
popupCardOpenButton.addEventListener("click", function () {
  cleanCardPopupValue();
  formValidCard.disableValidation(true);
  addPopup(popupCardElement);
});
popupEditProfile.addEventListener("mousedown", closePopupOverlay);
popupCardElement.addEventListener("mousedown", closePopupOverlay);
popupPhotoElement.addEventListener("mousedown", closePopupOverlay);
formEditPopup.addEventListener('submit', submitEditFormHandler);
formAddPopup.addEventListener('submit', submitAddFormHandler);
formValidProfile.enableValidation();
formValidCard.enableValidation();

