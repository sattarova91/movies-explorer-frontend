const {
  REACT_APP_API_ADDR = 'http://localhost:3000',
} = process.env;

class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  ////////////
  patch(url, data) {
    return this.fetch('PATCH', url, data);
  }

  get(url, headers = {}) {
    return this.fetch('GET', url, undefined, headers);
  }

  post(url, data) {
    return this.fetch('POST', url, data);
  }

  delete(url) {
    return this.fetch('DELETE', url);
  }

  put(url, data) {
    return this.fetch('PUT', url, data);
  }

  fetch(method, url, data = undefined, headers = {}) {
    return fetch(`${this.baseUrl}/${url}`, {
      method,
      headers: Object.assign(this.headers, headers),
      'Content-Type': 'application/json',
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

class MoviesApi extends Api {
  //////////// userAPI

  getCurrentUser() {
    return this.get('users/me');
  }

  updateCurrentUser({ name, about }) {
    return this.patch('users/me', { name, about });
  }

  updateCurrentUserAvatar(avatar) {
    return this.patch('users/me/avatar', { avatar: avatar });
  }

  //////////// movieAPI

  signUp({ name, email, password }) {
    return this.post('signup', { name, email, password });
  }

  signIn({ email, password }) {
    return this.post('signin', { email, password });
  }

  signOut() {
    return this.post('signout', {});
  }

  currentUser() {
    return this.get('users/me');
  }
}

const API = new MoviesApi({
  baseUrl: REACT_APP_API_ADDR,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default API;

