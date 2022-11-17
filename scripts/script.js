const popupElement = document.querySelector(".popup"); // Воспользуйтесь методом querySelector()
const nameInput = popupElement.querySelector(".popup__name"); // Воспользуйтесь инструментом .querySelector()
const jobInput = popupElement.querySelector(".popup__profession"); // Воспользуйтесь инструментом .querySelector()
const popupCloseButton = popupElement.querySelector(".popup__close");
const popupOpenButton = document.querySelector(".profile__edit-button");
const formSubmit = popupElement.querySelector('.popup__save');

const openPopupVisibility = function () {
  popupElement.classList.add("popup_is-opened");
};
const closePopupVisibility = function () {
  popupElement.classList.remove("popup_is-opened");
};

popupOpenButton.addEventListener("click", openPopupVisibility);
popupCloseButton.addEventListener("click", closePopupVisibility);


function formSubmitHandler(evt) {
  evt.preventDefault();
  const nameChange = document.querySelector('.profile__name');
  const professionChange = document.querySelector('.profile__profession');
  nameChange.textContent = nameInput.value;
  professionChange.textContent = jobInput.value;
}

popupElement.addEventListener('submit', formSubmitHandler);


// const cards = document.querySelectorAll(".element__like-button");
// const btn1 = cards[0];
// const btn2 = cards[1];
// const btn3 = cards[2];
// const btn4 = cards[3];
// const btn5 = cards[4];
// const btn6 = cards[5];
//
// const likeButton1Activated = function () {
//   btn1.classList.toggle("element__like-button_active");
// }
//
// btn1.addEventListener("click", likeButton1Activated);
//
// const likeButton2Activated = function () {
//   btn2.classList.toggle("element__like-button_active");
// }
//
// btn2.addEventListener("click", likeButton2Activated);
//
// const likeButton3Activated = function () {
//   btn3.classList.toggle("element__like-button_active");
// }
//
// btn3.addEventListener("click", likeButton3Activated);
//
// const likeButton4Activated = function () {
//   btn4.classList.toggle("element__like-button_active");
// }
//
// btn4.addEventListener("click", likeButton4Activated);
//
// const likeButton5Activated = function () {
//   btn5.classList.toggle("element__like-button_active");
// }
//
// btn5.addEventListener("click", likeButton5Activated);
//
// const likeButton6Activated = function () {
//   btn6.classList.toggle("element__like-button_active");
// }
//
// btn6.addEventListener("click", likeButton6Activated);
