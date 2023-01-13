// import {initialCards} from "./cards.js";
// import {CardNan} from "./cardNan.js";
const nameForm = document.querySelector('.profile__name');
const popupEditProfile = document.querySelector(".popup_type_profile-edit");
export const popupCardElement = document.querySelector(".popup_type_card-add");
export const popupPhotoElement = document.querySelector(".popup_type_photo");
const professionForm = document.querySelector('.profile__profession');
const popupOpenButton = document.querySelector(".profile__edit-button");
const popupCardOpenButton = document.querySelector('.profile__add-button');
const popupCloseButtonList = document.querySelectorAll(".popup__close");
const nameInput = popupEditProfile.querySelector(".popup__input_type_name");
const jobInput = popupEditProfile.querySelector(".popup__input_type_profession");
const titleInput = popupCardElement.querySelector('.popup__input_type_name');
const urlInput = popupCardElement.querySelector('.popup__input_type_profession');
export const popupPhotoName = document.querySelector('.popup__figcaption')
export const popUpPhotoOpenScreen = document.querySelector('.popup__image')
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

function submitEditFormHandler(evt) {
  evt.preventDefault();
  nameForm.textContent = nameInput.value;
  professionForm.textContent = jobInput.value;
  removePopup(popupEditProfile)
};

export function addPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupEscape);
};

export function removePopup(popup) {
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
