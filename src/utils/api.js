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

  get(url, options = {}) {
    return this.fetch('GET', url, undefined, options);
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

  fetch(method, url, data = undefined, options = {}) {
    return fetch(`${this.baseUrl}/${url}`, Object.assign({
      method,
      headers: this.headers,
      'Content-Type': 'application/json',
      credentials: 'include',
      body: JSON.stringify(data)
    }, options)).then(res => {
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

  updateCurrentUser({ name, email }) {
    return this.patch('users/me', { name, email });
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

  saveMovie(movie) {
    return this.post('movies', this.__fixMovie(movie));
  }

  __fixMovie(card) {
    const apiCard = {
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: parseInt(card.year),
      description: card.description.substring(0, 120),
      image: card.image.url,
      trailer: card.trailerLink,
      thumbnail: card.image.url,
      movieId: card.id,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
    };
    return apiCard;
  }
}

class BeatfilmMoviesApi extends Api {
  __fixMovie(card) {
    card.image.url = 'https://api.nomoreparties.co' + card.image.url;
    return card;
  }

  getAllMovies() {
    return this.get('', {credentials: 'omit'}).then(
      (cards) => {
        return cards.map(this.__fixMovie);
      }
    )
  }
}

const API = new MoviesApi({
  baseUrl: REACT_APP_API_ADDR,
  headers: {
    'Content-Type': 'application/json'
  }
});


const BEATFILM_API = new BeatfilmMoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
});

export { API, BEATFILM_API }  ;
