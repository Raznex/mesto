export class UserInfo {
  constructor({profileUserNameSelector, profileUserInfoSelector, profileUserAvatarSelector}) {
    this._userName = document.querySelector(profileUserNameSelector);
    this._userInfo = document.querySelector(profileUserInfoSelector);
    this._userAvatar = document.querySelector(profileUserAvatarSelector);
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userProfession: this._userInfo.textContent,
    }
  }

  setUserInfo({name, about, avatar, _id}) {
    this._userName.textContent = name;
    this._userInfo.textContent = about;
    this._userAvatar.src = avatar;
    this.id = _id;
  }
}
