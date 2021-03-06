export default class UserInfo {
  constructor({ userNameSelector, userJobSelector, userAvatarElement }) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userJobElement = document.querySelector(userJobSelector);
    this._userAvatarElement = document.querySelector(userAvatarElement);
  }
  //method which returns an object with information about the user(to display the user data in the open form)
  getUserInfo() {
    return {
      name: this._userNameElement.textContent,
      about: this._userJobElement.textContent,
    };
  }
  //method which takes new user data and adds it on the page
  setUserInfo({name, about}) {
    this._userNameElement.textContent = name;
    this._userJobElement.textContent = about;
  }
  setUserAvatar({avatar}) {
    this._userAvatarElement.style = `background-image: url(${avatar})`;
  }
}
