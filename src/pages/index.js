import {
  enableValidation as cfg,
  cardsContainer,
  popupCardOpenButton,
  popupOpenButton,
  popupChangeAvatarButton,
  formEditPopup,
  formAddPopup,
  options,
  formAvatarPopup,
} from "../constants/constant.js";
import {Card} from '../components/Card.js'
import {FormValidator} from "../components/FormValidator.js";
import {Section} from "../components/Section.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {UserInfo} from "../components/UserInfo.js";
import {PopupConfirmDelete} from "../components/PopupConfirmDelete.js";
import {Api} from "../components/Api.js";
import './index.css'

const api = new Api(options)

// Добавление попапа картинки на веь экран
const popupImage = new PopupWithImage(".popup_type_photo");
popupImage.setEventListener();

// функция для открытия попапа с фото
const handleCardClick = (title, link) => {
  popupImage.open(title, link);
}

// рендер карточки
const renderCard = (data) => {
  const card = new Card({...data, myId: user.id}, '#card-add', {
    handleCardClick,
    handleDeleteCard: () => {
      popupDeleteCard.open();
      popupDeleteCard.setSubmit(() => {
        api
          .deleteCard(data._id)
          .then(() => {
            card.handelDelete();
            popupDeleteCard.close()
          })
          .catch(console.log)
      })
    },
    handlePutLike: () => {
      api
        .setLike(data._id)
        .then((res) => {
          card.counterLikes(res.likes.length)
          card._handelButtonPutLike()
        })
        .catch(console.log);
    },
    handleDeleteLike: () => {
      api
        .deleteLike(data._id)
        .then((res) => {
          card.counterLikes(res.likes.length)
          card._handelButtonDeleteLike()
        })
        .catch(console.log);
    },
  })
  return card.generateCard()
}

// класс Section для вставки карточек
const cardsSection = new Section(
  {
    renderer: (item) => {
      cardsSection.addItem(renderCard(item));
    },
  },
  cardsContainer
);

// Класс добавления информации о пользователе
const user = new UserInfo({
  profileUserNameSelector: '.profile__name',
  profileUserInfoSelector: '.profile__profession',
  profileUserAvatarSelector: '.profile__avatar'
});

// Собираем промисы в один для работы с карточками
Promise.all([api.getInfoProfile(), api.getInitialCards()]).then(
  ([info, res]) => {
    user.setUserInfo(info);
    cardsSection.renderItem(res, user);
  }
).catch(console.log);

// Класс редактирования профиля
const popupProfileEdit = new PopupWithForm(".popup_type_profile-edit", {
  submitFormHandler: ({userName, userProfession}) => {
    popupProfileEdit.profileLoading(true);
    api
      .editProfile({name: userName, about: userProfession})
      .then((userInfo) => {
        user.setUserInfo(userInfo);
        popupProfileEdit.close();
      })
      .catch(console.log)
      .finally(() => popupProfileEdit.profileLoading(false))
  },
});
popupProfileEdit.setEventListener();

// класс для создания карточек
const popupAddCard = new PopupWithForm(".popup_type_card-add", {
  submitFormHandler: ({cardName, cardSrc}) => {
    api
      .createCard({name: cardName, link: cardSrc})
      .then((data) => {
        const card = renderCard({...data, myId: user.id})
        cardsSection.addItem(card);
        popupAddCard.close();
      })
      .catch(console.log)
  },
});
popupAddCard.setEventListener();

// Создание попапа со сменой аватара
const popupChangeAvatar = new PopupWithForm(".popup_type_new-avatar", {
  submitFormHandler: ({newAvatar}) => {
    popupChangeAvatar.profileLoading(true);
    api
      .changeAvatar({avatar: newAvatar})
      .then((userInfo) => {
        user.setUserInfo(userInfo);
        popupChangeAvatar.close();
      })
      .catch(console.log)
      .finally(() => popupProfileEdit.profileLoading(false))
  },
});
popupChangeAvatar.setEventListener();

// Слушатель кнопки добавить карточку
popupCardOpenButton.addEventListener("click", () => {
  formValidCard.disableValidation();
  popupAddCard.open();
});

// Открытие формы редактирования профиля
popupOpenButton.addEventListener("click", () => {
  popupProfileEdit.setValueInput(user.getUserInfo())
  formValidProfile.disableValidation();
  popupProfileEdit.open();
});

// Открытие формы смены аватара профиля
popupChangeAvatarButton.addEventListener("click", () => {
  formValidAvatar.disableValidation();
  popupChangeAvatar.open();
});


// Удаление карточки
const popupDeleteCard = new PopupConfirmDelete('.popup_type_delete-card')
popupDeleteCard.setEventListener()

// Валидация формы

const formValidProfile = new FormValidator(formEditPopup, cfg);
const formValidCard = new FormValidator(formAddPopup, cfg);
const formValidAvatar = new FormValidator(formAvatarPopup, cfg);
formValidProfile.enableValidation();
formValidCard.enableValidation();
formValidAvatar.enableValidation()
