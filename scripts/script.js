let nameForm = document.querySelector('.profile__name');
const popupElement = document.querySelector(".popup"); // Воспользуйтесь методом querySelector()
const popupCardElement = document.querySelector(".popup-card");
const popupPhotoElement = document.querySelector(".popup-photo");
let professionForm = document.querySelector('.profile__profession');
let nameInput = popupElement.querySelector(".popup__name"); // Воспользуйтесь инструментом .querySelector()
let jobInput = popupElement.querySelector(".popup__profession"); // Воспользуйтесь инструментом .querySelector()
const popupOpenButton = document.querySelector(".profile__edit-button");
const popupCardOpenButton = document.querySelector('.profile__add-button');
const popupCloseButton = popupElement.querySelector(".popup__close");
const popupCardCloseButton = popupCardElement.querySelector('.popup__close');
const popupPhotoCloseButton = popupPhotoElement.querySelector('.popup__close');
const cardElement = document.querySelector('.elements');
const cardsTemplate = document.querySelector('#card-add').content.querySelector('.element');
const photoFullOpen = cardsTemplate.querySelector('.element__image')
let titleInput = popupCardElement.querySelector('.popup__name');
let urlInput = popupCardElement.querySelector('.popup__profession');
const popupPhotoName = document.querySelector('.popup-photo__name')
const popUpPhotoOpenScreen = document.querySelector('.popup-photo__image')
let imageSrcElement = cardsTemplate.querySelector('.element__image')
let imageTextElement = cardsTemplate.querySelector('.element__title')
const initialCards = [
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

const openPopup = () => {
  popupElement.classList.add("popup_is-opened");
  nameInput.value = nameForm.innerHTML;
  jobInput.value = professionForm.innerHTML;
};
const openCardPopup = () => {
  popupCardElement.classList.add("popup_is-opened");
  titleInput.value = '';
  urlInput.value = '';
};
const popupPhotoOpenClick = () => {
  popupPhotoElement.classList.add("popup_is-opened");
  popupPhotoName.textContent =  imageTextElement.textContent;
  popUpPhotoOpenScreen.src = imageSrcElement.src;
}

const closePopup = () => {
  popupElement.classList.remove("popup_is-opened");
};
const closePhotoPopup = () => {
  popupPhotoElement.classList.remove("popup_is-opened");
};
const closeCardPopup = () => {
  popupCardElement.classList.remove("popup_is-opened");
};
const closePopupOverlay = function (event) {
  if (event.target === event.currentTarget) {
    closePopup();
    closeCardPopup();
    closePhotoPopup();
  }
}
const simpleNewCard = (item, element) => {
  const cardTitle = createCards(item);
  element.prepend(cardTitle);
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameForm.textContent = nameInput.value;
  professionForm.textContent = jobInput.value;
  closePopup()
}

function createCards(item) {
  const newCard = cardsTemplate.cloneNode(true);
  const nameCards = newCard.querySelector('.element__title')
  const photoCards = newCard.querySelector('.element__image');
  const likeCardButton = newCard.querySelector('.element__like-button');
  const deleteCardButton = newCard.querySelector('.element__delete-button');
  deleteCardButton.addEventListener('click', deleteButtonClick);
  likeCardButton.addEventListener('click', likeButtonClick);
  nameCards.textContent = item.name;
  photoCards.src = item.link;
  photoCards.alt = item.name;
  return newCard;
}

function photoCardOpen(item) {


}

const likeButtonClick = (evt) => {
  evt.target.classList.toggle("element__like-button_active");
}
const deleteButtonClick = (evt) => {
  evt.target.closest('.element').remove();
}

function cardSubmitHandler(evt) {
  evt.preventDefault();
  const initialCards = {
    name: titleInput.value,
    link: urlInput.value
  };
  simpleNewCard(initialCards, cardElement);
  closeCardPopup()
}

initialCards.forEach(function (item){
  simpleNewCard(item, cardElement);
  photoCardOpen(item);
})

photoFullOpen.addEventListener('click', popupPhotoOpenClick);
popupCardOpenButton.addEventListener("click", openCardPopup);
popupCardCloseButton.addEventListener("click", closeCardPopup);
popupOpenButton.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", closePopup);
popupElement.addEventListener("click", closePopupOverlay);
popupCardElement.addEventListener("click", closePopupOverlay);
popupElement.addEventListener('submit', formSubmitHandler);
popupCardElement.addEventListener('submit', cardSubmitHandler);
popupPhotoCloseButton.addEventListener("click", closePhotoPopup);
