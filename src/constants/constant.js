export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const enableValidation = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error-visible",
  errorClass: "popup__input-span_type_error",
};
export const nameForm = document.querySelector('.profile__name');
const popupEditProfile = document.querySelector(".popup_type_profile-edit");
const popupCardElement = document.querySelector(".popup_type_card-add");
export const popupPhotoElement = document.querySelector(".popup_type_photo");
export const professionForm = document.querySelector('.profile__profession');
export const popupOpenButton = document.querySelector(".profile__edit-button");
export const popupCardOpenButton = document.querySelector('.profile__add-button');
const popupCloseButtonList = document.querySelectorAll(".popup__close");
export const nameInput = popupEditProfile.querySelector(".popup__input_type_name");
export const jobInput = popupEditProfile.querySelector(".popup__input_type_profession");
export const titleInput = popupCardElement.querySelector('.popup__input_type_name');
export const urlInput = popupCardElement.querySelector('.popup__input_type_profession');
const popupPhotoName = document.querySelector('.popup__figcaption')
const popUpPhotoOpenScreen = document.querySelector('.popup__image')
export const formEditPopup = popupEditProfile.querySelector('#popup-edit-form')
export const cardList = document.querySelector('.elements');
export const formAddPopup = popupCardElement.querySelector('#popup-add-form')
