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

const changeNameEditPopup  = () => {
  nameInput.value = nameForm.innerHTML;
  jobInput.value = professionForm.innerHTML;
};

const openPopup = () => {
  popupElement.classList.add("popup_is-opened");

};

const cleanCardPopupValue = () => {
  titleInput.value = '';
  urlInput.value = '';
};

const openCardPopup = () => {
  popupCardElement.classList.add("popup_is-opened");
};

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
  photoCards.addEventListener('click', function(evt) {
    changeValuePhotoPopup(evt), popupPhotoOpenClick(evt)
  });
  nameCards.textContent = item.name;
  photoCards.src = item.link;
  photoCards.alt = item.name;
  return newCard;
}

const changeValuePhotoPopup = (evt) => {
  popUpPhotoOpenScreen.src = evt.target.src
  popUpPhotoOpenScreen.alt = evt.target.alt
  popupPhotoName.textContent = evt.target.alt
}

const popupPhotoOpenClick = (element__image) => {
  popupPhotoElement.classList.add('popup_is-opened')
};

const likeButtonClick = (evt) => {
  evt.target.classList.toggle("element__like-button_active");
};

const deleteButtonClick = (evt) => {
  evt.target.closest('.element').remove();
};

function cardSubmitHandler(evt) {
  evt.preventDefault();
  const initialCard = {
    name: titleInput.value,
    link: urlInput.value
  };
  simpleNewCard(initialCard, cardElement);
  closeCardPopup()
};

initialCards.forEach(function (item) {
  simpleNewCard(item, cardElement);
});


popupCardOpenButton.addEventListener("click", function() {
  cleanCardPopupValue(), openCardPopup()
});
popupOpenButton.addEventListener("click", function () {
  changeNameEditPopup(), openPopup()
});
popupCardCloseButton.addEventListener("click", closeCardPopup);
popupCloseButton.addEventListener("click", closePopup);
popupElement.addEventListener("click", closePopupOverlay);
popupCardElement.addEventListener("click", closePopupOverlay);
popupElement.addEventListener('submit', formSubmitHandler);
popupCardElement.addEventListener('submit', cardSubmitHandler);
popupPhotoCloseButton.addEventListener("click", closePhotoPopup);
