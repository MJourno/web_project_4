const customFetch = (url, headers) =>
  fetch(url, headers)
    .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
    .catch(console.log)


export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return customFetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
  }

  loadUserInfo() {
    return customFetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
  }

  createCard(data) {
    //console.log('createCard', data);
    return customFetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(data)
    })
  }

  editProfile(data) {
    return customFetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(data)
    })
  }

  deleteCard(cardId) {
    return customFetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    })
  }
}
