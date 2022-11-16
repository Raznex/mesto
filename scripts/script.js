// Находим форму в DOM
const popupElement = document.querySelector(".popup"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = popupElement.querySelector(".popup__name"); // Воспользуйтесь инструментом .querySelector()
const jobInput = popupElement.querySelector(".popup__profession"); // Воспользуйтесь инструментом .querySelector()
const popupCloseButton = popupElement.querySelector(".popup__close");
const popupOpenButton = document.querySelector(".profile__edit-button");

const openPopupVisibility = function () {
  popupElement.classList.add("popup_is-opened");
};
const closePopupVisibility = function () {
  popupElement.classList.remove("popup_is-opened");
};

popupOpenButton.addEventListener("click", openPopupVisibility);
popupCloseButton.addEventListener("click", closePopupVisibility);
//
//
//
//
const elementButton = document.querySelector(".elements");
const likeButton = elementButton.querySelector(".element__like-button");

const likeButtonActivated = function () {
  likeButton.classList.toggle("element__like-button_active");
}

 likeButton.addEventListener("click", likeButtonActivated);




// // Обработчик «отправки» формы
// function() {

// }
// function formSubmitHandler (evt) {
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//                                                 // Так мы можем определить свою логику отправки.
//                                                 // О том, как это делать, расскажем позже.

//     // Получите значение полей jobInput и nameInput из свойства value

//     // Выберите элементы, куда должны быть вставлены значения полей

//     // Вставьте новые значения с помощью textContent
// }

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', formSubmitHandler);
