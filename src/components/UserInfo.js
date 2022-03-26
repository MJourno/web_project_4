export default class UserInfo {
  constructor({ userNameSelector, userJobSelector, userAvatarSelector }) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userJobElement = document.querySelector(userJobSelector);
    this._userAvatarSelector = document.querySelector(userAvatarSelector);
  }
  //method which returns an object with information about the user(to display the user data in the open form)
  getUserInfo() {
    console.log('avatar', this._userAvatarSelector.value)
    return {
      name: this._userNameElement.textContent,
      about: this._userJobElement.textContent,
      avatar: this._userAvatarSelector
    };
  }
  //method which takes new user data and adds it on the page
  setUserInfo({name, about, avatar}) {
    this._userNameElement.textContent = name;
    this._userJobElement.textContent = about;
    this._uuserAvatarSelector.style.backgroundImage = avatar ;

  }
}
