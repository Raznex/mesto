(()=>{"use strict";var e={inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_type_error-visible",errorClass:"popup__input-span_type_error"},t=document.querySelector(".popup_type_profile-edit"),r=document.querySelector(".popup_type_card-add"),n=document.querySelector(".profile__edit-button"),o=document.querySelector(".profile__add-button"),i=t.querySelector(".popup__input_type_name"),u=t.querySelector(".popup__input_type_profession"),a=t.querySelector("#popup-edit-form"),l=r.querySelector("#popup-add-form");function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}var f=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=t.name,this._image=t.link,this._templateSelector=r,this._handelCardClick=n}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_handelButtonLike",value:function(){this._likeButton.classList.toggle("element__like-button_active")}},{key:"_handelButtonDelete",value:function(){this._element.remove()}},{key:"_setEventListener",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handelButtonLike()})),this._deleteButton.addEventListener("click",(function(){e._handelButtonDelete()})),this._cardImage.addEventListener("click",(function(){e._handelCardClick(e._title,e._image)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__image"),this._cardImage.src=this._image,this._cardImage.alt=this._title,this._deleteButton=this._element.querySelector(".element__delete-button"),this._likeButton=this._element.querySelector(".element__like-button"),this._element.querySelector(".element__title").textContent=this._title,this._setEventListener(),this._element}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function d(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}var v=function(){function e(t,r){var n,o,i,u,a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,i=function(e){e.validity.valid?a._removeValidityMessage(e):a._spawnValidityMessage(e,e.validationMessage)},(o=d(o="_checkValidity"))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,this._input=r.inputSelector,this._submitButton=r.submitButtonSelector,this._inactiveButton=r.inactiveButtonClass,this._inputError=r.inputErrorClass,this._classError=r.errorClass,this._form=t,this._inputList=function(e){if(Array.isArray(e))return y(e)}(u=this._form.querySelectorAll(this._input))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(u)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._buttonElement=this._form.querySelector(this._submitButton)}var t,r;return t=e,(r=[{key:"_spawnValidityMessage",value:function(e,t){var r=document.querySelector("#".concat(e.id,"-error"));r.textContent=t,r.classList.add(this._classError),e.classList.add(this._inputError)}},{key:"_removeValidityMessage",value:function(e){var t=document.querySelector("#".concat(e.id,"-error"));t.textContent="",t.classList.remove(this._classError),e.classList.remove(this._inputError)}},{key:"_toggleButtonDisabled",value:function(){this._inputList.every((function(e){return e.validity.valid}))?(this._buttonElement.classList.remove(this._inactiveButton),this._buttonElement.disabled=!1):(this._buttonElement.classList.add(this._inactiveButton),this._buttonElement.disabled=!0)}},{key:"_setEventListener",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkValidity(t),e._toggleButtonDisabled()}))}))}},{key:"disableValidation",value:function(){var e=this;this._toggleButtonDisabled(),this._inputList.forEach((function(t){e._removeValidityMessage(t)}))}},{key:"enableValidation",value:function(){this._setEventListener()}}])&&m(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}var _=function(){function e(t,r){var n=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=n,this._renderer=o,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItem",value:function(){var e=this;this._initialArray.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}var w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListener",value:function(){this._closeButton.addEventListener("click",this.close.bind(this)),this._popup.addEventListener("mousedown",this._handleOverlayClickClose.bind(this))}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClickClose",value:function(e){e.target===e.currentTarget&&this.close()}}])&&S(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=O(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},j.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function C(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(n);if(o){var r=L(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return C(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._figcaption=t._popup.querySelector(".popup__figcaption"),t}return t=u,(r=[{key:"open",value:function(e,t){this._popupImage.src=t,this._popupImage.alt=e,this._figcaption.textContent=e,j(L(u.prototype),"open",this).call(this)}}])&&E(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(w);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==q(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===q(o)?o:String(o)),n)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=x(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},T.apply(this,arguments)}function x(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function V(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(n);if(o){var r=N(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return V(this,e)});function u(e,t){var r,n=t.submitFormHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._submitFormHandler=n,r._form=r._popup.querySelector(".popup__form"),r._inputs=r._form.querySelectorAll(".popup__input"),r}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._formContainer={},this._inputs.forEach((function(t){e._formContainer[t.name]=t.value})),this._formContainer}},{key:"setEventListener",value:function(){var e=this;T(N(u.prototype),"setEventListener",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitFormHandler(e._getInputValues())}))}},{key:"close",value:function(){T(N(u.prototype),"close",this).call(this),this._form.reset()}}])&&B(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(w);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==D(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===D(o)?o:String(o)),n)}var o}var M=function(){function e(t){var r=t.profileUserNameSelector,n=t.profileUserInfoSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(r),this._userInfo=document.querySelector(n)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return console.log(this._userName),{userName:this._userName.textContent,userInfo:this._userInfo.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,r=e.userInfo;this._userName.textContent=t,this._userInfo.textContent=r}}])&&U(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),F=function(e,t){H.open(e,t)},H=new I(".popup_type_photo");H.setEventListener();var z=function(e){return new f(e,"#card-add",F).generateCard()},$=new _({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){$.addItem(z(e))}},".elements");$.renderItem();var G=new A(".popup_type_card-add",{submitFormHandler:function(e){var t=e.cardName,r=e.cardSrc,n=z({name:t,link:r});$.addItem(n),G.close()}});G.setEventListener(),o.addEventListener("click",(function(){W.disableValidation(),G.open()}));var J=new M({profileUserNameSelector:".profile__name",profileUserInfoSelector:".profile__profession"}),K=new A(".popup_type_profile-edit",{submitFormHandler:function(e){var t=e.userName,r=e.userProfession;J.setUserInfo({userName:t,userInfo:r}),K.close()}});K.setEventListener(),n.addEventListener("click",(function(){var e=J.getUserInfo(),t=e.userName,r=e.userInfo;i.value=t,u.value=r,Q.disableValidation(),K.open()}));var Q=new v(a,e),W=new v(l,e);Q.enableValidation(),W.enableValidation()})();