export class UserInfo {
  constructor({profileUserName, profileUserInfo}) {
    this._userName = profileUserName;
    this._userInfo = profileUserInfo;
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
