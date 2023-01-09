import {initialCards} from "./cards.js";
import {Card} from "./card.js";
const nameForm = document.querySelector('.profile__name');
const popupEditProfile = document.querySelector(".popup_type_profile-edit");
const popupCardElement = document.querySelector(".popup_type_card-add");
export const popupPhotoElement = document.querySelector(".popup_type_photo");
const professionForm = document.querySelector('.profile__profession');
const popupOpenButton = document.querySelector(".profile__edit-button");
const popupCardOpenButton = document.querySelector('.profile__add-button');
const popupCloseButtonList = document.querySelectorAll(".popup__close");
const cardElement = document.querySelector('.elements');
const nameInput = popupEditProfile.querySelector(".popup__input_type_name");
const jobInput = popupEditProfile.querySelector(".popup__input_type_profession");
const titleInput = popupCardElement.querySelector('.popup__input_type_name');
const urlInput = popupCardElement.querySelector('.popup__input_type_profession');
export const popupPhotoName = document.querySelector('.popup__figcaption')
export const popUpPhotoOpenScreen = document.querySelector('.popup__image')
const formAddPopup = popupCardElement.querySelector('#popup-add-form')
const formEditPopup = popupEditProfile.querySelector('#popup-edit-form')
const buttonSubmitCard = popupCardElement.querySelector('.popup__save')

const changeNameEditPopup = () => {
  nameInput.value = nameForm.textContent;
  jobInput.value = professionForm.textContent;
};

const cleanCardPopupValue = () => {
  buttonSubmitCard.classList.add('popup__save_disabled');
  buttonSubmitCard.disabled = true;
  titleInput.value = '';
  urlInput.value = '';
};

const createNewCard = (item, element) => {
  const cardTitle = createCards(item);
  element.prepend(cardTitle);
};

function createCards(item) {
  const card = new Card(item, '#card-add')
  const newCard = card.generateCard()
  return newCard;
};

function submitEditFormHandler(evt) {
  evt.preventDefault();
  nameForm.textContent = nameInput.value;
  professionForm.textContent = jobInput.value;
  removePopup(popupEditProfile)
};

function submitCardHandler(evt) {
  evt.preventDefault();
  const initialCard = {
    name: titleInput.value,
    link: urlInput.value
  };
  createNewCard(initialCard, cardElement);
  removePopup(popupCardElement);
};

export function addPopup(popup) {
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
  addPopup(popupEditProfile);
});
popupCardOpenButton.addEventListener("click", function () {
  cleanCardPopupValue();
  addPopup(popupCardElement);
});
popupEditProfile.addEventListener("mousedown", closePopupOverlay);
popupCardElement.addEventListener("mousedown", closePopupOverlay);
popupPhotoElement.addEventListener("mousedown", closePopupOverlay);
formEditPopup.addEventListener('submit', submitEditFormHandler);
formAddPopup.addEventListener('submit', submitCardHandler);
