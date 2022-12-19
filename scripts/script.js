const nameForm = document.querySelector('.profile__name');
const popupEditProfile = document.querySelector(".popup_type_profile-edit");
const popupCardElement = document.querySelector(".popup_type_card-add");
const popupPhotoElement = document.querySelector(".popup_type_photo");
const professionForm = document.querySelector('.profile__profession');
const popupOpenButton = document.querySelector(".profile__edit-button");
const popupCardOpenButton = document.querySelector('.profile__add-button');
const popupCloseButton = popupEditProfile.querySelector(".popup__close");
const popupCardCloseButton = popupCardElement.querySelector('.popup__close');
const popupPhotoCloseButton = popupPhotoElement.querySelector('.popup__close');
const cardElement = document.querySelector('.elements');
const cardsTemplate = document.querySelector('#card-add').content.querySelector('.element');
const nameInput = popupEditProfile.querySelector(".popup__input_type_name");
const jobInput = popupEditProfile.querySelector(".popup__input_type_profession");
const titleInput = popupCardElement.querySelector('.popup__input_type_name');
const urlInput = popupCardElement.querySelector('.popup__input_type_profession');
const popupPhotoName = document.querySelector('.popup__figcaption')
const popUpPhotoOpenScreen = document.querySelector('.popup__image')
const formAddPopup = popupCardElement.querySelector('#popup-add-form')
const formEditPopup = popupEditProfile.querySelector('#popup-edit-form')

const changeNameEditPopup = () => {
  nameInput.value = nameForm.textContent;
  jobInput.value = professionForm.textContent;
};

const cleanCardPopupValue = () => {
  titleInput.value = '';
  urlInput.value = '';
};

const createNewCard = (item, element) => {
  const cardTitle = createCards(item);
  element.prepend(cardTitle);
};

function createCards(item) {
  const newCard = cardsTemplate.cloneNode(true);
  const nameCards = newCard.querySelector('.element__title')
  const photoCards = newCard.querySelector('.element__image');
  const likeCardButton = newCard.querySelector('.element__like-button');
  const deleteCardButton = newCard.querySelector('.element__delete-button');
  deleteCardButton.addEventListener('click', handlingButtonDelete);
  likeCardButton.addEventListener('click', handlingButtonLike);
  photoCards.addEventListener('click', function () {
    changeValuePhotoPopup(nameCards, photoCards), addPopup(popupPhotoElement);
  });
  nameCards.textContent = item.name;
  photoCards.src = item.link;
  photoCards.alt = item.name;
  return newCard;
};

const changeValuePhotoPopup = (nameCards, photoCards) => {
  popUpPhotoOpenScreen.src = photoCards.src
  popUpPhotoOpenScreen.alt = photoCards.alt
  popupPhotoName.textContent = nameCards.textContent

};

const handlingButtonLike = (evt) => {
  evt.target.classList.toggle("element__like-button_active");
};

const handlingButtonDelete = (evt) => {
  evt.target.closest('.element').remove();
};

function submitFormHandler(evt) {
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

initialCards.forEach(function (item) {
  createNewCard(item, cardElement);
});

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
  };
}

const closePopupEscape = (evt, popup) => {
  if (evt.key === "Escape") {
    removePopup(popup)
  };
};

popupOpenButton.addEventListener("click", function () {
  changeNameEditPopup(), addPopup(popupEditProfile)
});
popupCardOpenButton.addEventListener("click", function () {
  cleanCardPopupValue(), addPopup(popupCardElement)
});
popupCloseButton.addEventListener("click", function () {
  removePopup(popupEditProfile);
});
popupCardCloseButton.addEventListener("click", function () {
  removePopup(popupCardElement);
});
popupPhotoCloseButton.addEventListener("click", function () {
  removePopup(popupPhotoElement);
});
popupEditProfile.addEventListener("click", closePopupOverlay);
popupCardElement.addEventListener("click", closePopupOverlay);
popupPhotoElement.addEventListener("click", closePopupOverlay);
formEditPopup.addEventListener('submit', submitFormHandler);
formAddPopup.addEventListener('submit', submitCardHandler);
