export class UserInfo {
  constructor({profileUserNameSelector, profileUserInfoSelector}) {
    this._userName = document.querySelector(profileUserNameSelector);
    this._userInfo = document.querySelector(profileUserInfoSelector);
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userInfo: this._userInfo.textContent
    }
  }

  setUserInfo({userName, userInfo}) {
    this._userName.textContent = userName;
    this._userInfo.textContent = userInfo;
  }
}
