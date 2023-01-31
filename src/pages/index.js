import {
  initialCards,
  enableValidation as cfg,
  nameInput,
  jobInput,
  cardsContainer,
  popupCardOpenButton,
  popupOpenButton,
  formEditPopup,
  formAddPopup,
} from "../constants/constant.js";
import {Card} from '../components/Card.js'
import {FormValidator} from "../components/FormValidator.js";
import {Section} from "../components/Section.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {UserInfo} from "../components/UserInfo.js";
import './index.css'

// функция для открытия попапа с фото
const handleCardClick = (title, link) => {
  popupImage.open(title, link);
}
// Добавление попапа картинки на веь экран
const popupImage = new PopupWithImage(".popup_type_photo");
popupImage.setEventListener();

// рендер карточки
const renderCard = (data) => {
  const card = new Card(data, '#card-add', handleCardClick)
  return card.generateCard()
}

// класс Section для вставки карточек
const cardsSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardsSection.addItem(renderCard(item));
    },
  },
  cardsContainer
);
cardsSection.renderItem()
// класс для создания карточек
const popupAddCard = new PopupWithForm(".popup_type_card-add", {
  submitFormHandler: ({cardName, cardSrc}) => {
    const card = renderCard({
      name: cardName,
      link: cardSrc,
    });
    cardsSection.addItem(card);
    popupAddCard.close();
  },
});
popupAddCard.setEventListener();

// Слушатель кнопки добавить карточку
popupCardOpenButton.addEventListener("click", () => {
  formValidCard.disableValidation();
  popupAddCard.open();
});

// Класс добавления информации о пользователе
const user = new UserInfo({
  profileUserName: '.profile__name',
  profileUserInfo: '.profile__profession'
});


// Класс редактирования профиля
const popupProfileEdit = new PopupWithForm(".popup_type_profile-edit", {
  submitFormHandler: ({userName, userProfession}) => {
    user.setUserInfo({
      userName: userName,
      userInfo: userProfession,
    });
    popupProfileEdit.close();
  },
});
popupProfileEdit.setEventListener();

// Открытие формы редактирования профиля
popupOpenButton.addEventListener("click", () => {
  const {userName, userInfo} = user.getUserInfo();
  nameInput.value = userName;
  jobInput.value = userInfo;

  formValidProfile.disableValidation();
  popupProfileEdit.open();
});


// Валидация формы

const formValidProfile = new FormValidator(formEditPopup, cfg);
const formValidCard = new FormValidator(formAddPopup, cfg);
formValidProfile.enableValidation();
formValidCard.enableValidation();
