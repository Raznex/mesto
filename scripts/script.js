const popupElement = document.querySelector(".popup"); // Воспользуйтесь методом querySelector()
let nameInput = popupElement.querySelector(".popup__name"); // Воспользуйтесь инструментом .querySelector()
let jobInput = popupElement.querySelector(".popup__profession"); // Воспользуйтесь инструментом .querySelector()
const popupCloseButton = popupElement.querySelector(".popup__close");
const popupOpenButton = document.querySelector(".profile__edit-button");
let nameForm = document.querySelector('.profile__name');
let professionForm = document.querySelector('.profile__profession');
const openPopup = function () {
  popupElement.classList.add("popup_is-opened");
  nameInput.value = nameForm.innerHTML;
  jobInput.value = professionForm.innerHTML;
};
const closePopup = function () {
  popupElement.classList.remove("popup_is-opened");
};

const closePopupOverlay = function (event) {
  if (event.target === event.currentTarget) {
    closePopup();
  }
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameForm.textContent = nameInput.value;
  professionForm.textContent = jobInput.value;
  closePopup()
}

popupOpenButton.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", closePopup);
popupElement.addEventListener("click", closePopupOverlay);
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
