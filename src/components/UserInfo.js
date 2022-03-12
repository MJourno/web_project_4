export default class UserInfo {
  constructor({ userNameSelector, userJobSelector }) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userJobElement = document.querySelector(userJobSelector);
  }
  //method which returns an object with information about the user(to display the user data in the open form)
  getUserInfo() {
    return {
      name: this._userNameElement.textContent,
      job: this._userJobElement.textContent
    };
  }
  //method which takes new user data and adds it on the page
  setUserInfo({name, job}) {
    this._userNameElement.textContent = name;
    this._userJobElement.textContent = job;
  }
}
