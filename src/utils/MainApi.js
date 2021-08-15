import Api from './api';
import MoviesApi from './MoviesApi';
import { movieIndex } from './utils';

const {
  REACT_APP_API_ADDR = 'http://localhost:3000',
} = process.env;

class MainApi extends Api {
  constructor() {
    super({
      baseUrl: REACT_APP_API_ADDR,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // userAPI

  getCurrentUser() {
    return this.get('users/me');
  }

  updateCurrentUser({ name, email }) {
    return this.patch('users/me', { name, email });
  }

  // movieAPI

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
    const res = movie;
    delete res._id;
    return this.post('movies', res);
  }

  getSavedMovies(ownerId) {
    return this.get('movies').then((savedMovies) => savedMovies.filter((savedCard) => (savedCard.owner === ownerId)));
  }

  getAllMovies(ownerId) {
    return Promise.all([
      this.getSavedMovies(ownerId),
      MoviesApi.getAllMovies(),
    ]).then(([savedMovies, allMovies]) => allMovies.map((card) => {
      const idx = movieIndex(savedMovies, card.movieId);
      const res = card;
      if (idx !== -1) {
        res._id = savedMovies[idx]._id;
      } else {
        res._id = null;
      }
      return res;
    }));
  }
}

export default new MainApi();
