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
  constructor() {
    super({
      baseUrl: REACT_APP_API_ADDR,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    this.__BeatfilmMoviesApi = new BeatfilmMoviesApi({
      baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

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

  deleteMovie(movieId) {
    return this.delete(`movies/${movieId}`);
  }

  saveMovie(movie) {
    delete movie._id;
    return this.post('movies', movie);
  }

  getAllMovies(ownerId) {
    return Promise.all([
      this.get('movies'),
      this.__BeatfilmMoviesApi.getAllMovies()
    ]).then(([savedMovies, allMovies]) => {
      const res = [];

      allMovies.forEach((card) => {
        const idx = savedMovies.findIndex((savedCard) => {
          return (
            card.movieId === savedCard.movieId &&
            savedCard.owner === ownerId
          )
        });
        if (idx !== -1) {
          card._id = savedMovies[idx]._id;
        } else {
          card._id = null;
        }

        res[card.movieId] = card;
      })

      return res;
    })
  }
}

class BeatfilmMoviesApi extends Api {
  __fixMovie(card) {
    function trim(str, len) {
      str = str ? str : "";
      return str.substring(0, len);
    }
    function imgUrl(url) {
      return 'https://api.nomoreparties.co' + url;
    }

    const resCard = {
      country: trim(card.country, 30),
      director: trim(card.director, 30),
      duration: card.duration,
      year: parseInt(card.year),
      description: trim(card.description, 120),
      image:imgUrl(card.image.url),
      trailer: card.trailerLink,
      thumbnail: imgUrl(card.image.url),
      movieId: card.id,
      nameRU: trim(card.nameRU, 30),
      nameEN: trim(card.nameEN, 30),
    };
    return resCard;
  }

  getAllMovies() {
    return this.get('', {credentials: 'omit'}).then(
      (cards) => {
        return cards.map(this.__fixMovie);
      }
    )
  }
}



const API = new MoviesApi();
export default API;
