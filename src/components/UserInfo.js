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

  setUserInfo({name, about, _id}) {
    this._userName.textContent = name;
    this._userInfo.textContent = about;
    this.id = _id
  }
}
