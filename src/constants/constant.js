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

const popupEditProfile = document.querySelector(".popup_type_profile-edit");
const popupCardElement = document.querySelector(".popup_type_card-add");
export const popupOpenButton = document.querySelector(".profile__edit-button");
export const popupCardOpenButton = document.querySelector('.profile__add-button');
export const nameInput = popupEditProfile.querySelector(".popup__input_type_name");
export const jobInput = popupEditProfile.querySelector(".popup__input_type_profession");
export const formEditPopup = popupEditProfile.querySelector('#popup-edit-form')
export const cardsContainer = '.elements';
export const formAddPopup = popupCardElement.querySelector('#popup-add-form')
