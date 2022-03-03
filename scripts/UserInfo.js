export default class UserInfo {
  constructor() {
    this._userName = document.querySelector('.profile__value_type_name');
    this._userJob = document.querySelector('.profile__value_type_description');
  }
  //method which returns an object with information about the user(to display the user data in the open form)
  getUserInfo() {
    return { name: this._userName.textContent, job: this._userJob.textContent };
  }
  //method which takes new user data and adds it on the page
  setUserInfo(name, job) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }
}
