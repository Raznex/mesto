const nameForm = document.querySelector('.profile__name');
const popupElement = document.querySelector(".popup_type_profile-edit"); // Воспользуйтесь методом querySelector()
const popupCardElement = document.querySelector(".popup_type_card-add");
const popupPhotoElement = document.querySelector(".popup_type_photo");
const professionForm = document.querySelector('.profile__profession');
const nameInput = popupElement.querySelector(".popup__name"); // Воспользуйтесь инструментом .querySelector()
const jobInput = popupElement.querySelector(".popup__profession"); // Воспользуйтесь инструментом .querySelector()
const popupOpenButton = document.querySelector(".profile__edit-button");
const popupCardOpenButton = document.querySelector('.profile__add-button');
const popupCloseButton = popupElement.querySelector(".popup__close");
const popupCardCloseButton = popupCardElement.querySelector('.popup__close');
const popupPhotoCloseButton = popupPhotoElement.querySelector('.popup__close');
const cardElement = document.querySelector('.elements');
const cardsTemplate = document.querySelector('#card-add').content.querySelector('.element');
const titleInput = popupCardElement.querySelector('.popup__name');
const urlInput = popupCardElement.querySelector('.popup__profession');
const popupPhotoName = document.querySelector('.popup__figcaption')
const popUpPhotoOpenScreen = document.querySelector('.popup__image')

const changeNameEditPopup = () => {
  nameInput.value = nameForm.innerHTML;
  jobInput.value = professionForm.innerHTML;
};

const cleanCardPopupValue = () => {
  titleInput.value = '';
  urlInput.value = '';
};

const simpleNewCard = (item, element) => {
  const cardTitle = createCards(item);
  element.prepend(cardTitle);
};

function createCards(item) {
  const newCard = cardsTemplate.cloneNode(true);
  const nameCards = newCard.querySelector('.element__title')
  const photoCards = newCard.querySelector('.element__image');
  const likeCardButton = newCard.querySelector('.element__like-button');
  const deleteCardButton = newCard.querySelector('.element__delete-button');
  deleteCardButton.addEventListener('click', deleteButtonClick);
  likeCardButton.addEventListener('click', likeButtonClick);
  photoCards.addEventListener('click', function (evt) {
    changeValuePhotoPopup(evt), addPopup(popupPhotoElement);
  });
  nameCards.textContent = item.name;
  photoCards.src = item.link;
  photoCards.alt = item.name;
  return newCard;
};

const changeValuePhotoPopup = (evt) => {
  popUpPhotoOpenScreen.src = evt.target.src
  popUpPhotoOpenScreen.alt = evt.target.alt
  popupPhotoName.textContent = evt.target.alt
};

const likeButtonClick = (evt) => {
  evt.target.classList.toggle("element__like-button_active");
};

const deleteButtonClick = (evt) => {
  evt.target.closest('.element').remove();
};

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameForm.textContent = nameInput.value;
  professionForm.textContent = jobInput.value;
  removePopup(popupElement)
};

function cardSubmitHandler(evt) {
  evt.preventDefault();
  const initialCard = {
    name: titleInput.value,
    link: urlInput.value
  };
  simpleNewCard(initialCard, cardElement);
  removePopup(popupCardElement);
};

initialCards.forEach(function (item) {
  simpleNewCard(item, cardElement);
});


function addPopup(popupElement) {
  popupElement.classList.add("popup_is-opened");
};

function removePopup(popupElement) {
  popupElement.classList.remove("popup_is-opened");
};

const closePopupOverlay = (evt) => {
   if (evt.target === evt.currentTarget) {
    evt.target.closest('.popup_is-opened').classList.remove("popup_is-opened")
  };
}


const closePopupEscape = (evt) => {
  if (evt.key === "Escape") {
    document.querySelector('.popup_is-opened').classList.remove("popup_is-opened")
  };
};
document.addEventListener("keydown", closePopupEscape);

popupOpenButton.addEventListener("click", function () {
  changeNameEditPopup(), addPopup(popupElement)
});
popupCardOpenButton.addEventListener("click", function () {
  cleanCardPopupValue(), addPopup(popupCardElement)
});
popupCloseButton.addEventListener("click", function () {
  removePopup(popupElement);
});
popupCardCloseButton.addEventListener("click", function () {
  removePopup(popupCardElement);
});
popupPhotoCloseButton.addEventListener("click", function () {
  removePopup(popupPhotoElement);
});
popupElement.addEventListener("click", closePopupOverlay);
popupCardElement.addEventListener("click", closePopupOverlay);
popupPhotoElement.addEventListener("click", closePopupOverlay);
popupElement.addEventListener('submit', formSubmitHandler);
popupCardElement.addEventListener('submit', cardSubmitHandler);
