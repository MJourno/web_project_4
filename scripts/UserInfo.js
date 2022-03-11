export default class UserInfo {
  constructor(userData) {
    this._userName = document.querySelector(userData.name);
    this._userJob = document.querySelector(userData.job);
  }
  //method which returns an object with information about the user(to display the user data in the open form)
  getUserInfo() {
    console.log('testGet')
    return {
      name: this._userName.textContent,
      job: this._userJob.textContent
    };
  }
  //method which takes new user data and adds it on the page
  setUserInfo({name, job}) {
   console.log('testSet');
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }
}
