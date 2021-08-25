import Api from './api';

class BeatfilmMoviesApi extends Api {
  getAllMovies() {
    function fixMovie(card) {
      function trim(str, len) {
        const res = str || '';
        return res.substring(0, len);
      }
      function imgUrl(url) {
        return `https://api.nomoreparties.co${url}`;
      }

      // данные из beatfilm зачастую не проходят валидацию по нашим требованиям
      const resCard = {
        country: trim(card.country, 30),
        director: trim(card.director, 30),
        duration: card.duration,
        year: parseInt(card.year, 10),
        description: trim(card.description, 120),
        image: imgUrl(card.image.url),
        trailer: card.trailerLink,
        thumbnail: imgUrl(card.image.url),
        movieId: card.id,
        nameRU: trim(card.nameRU ? card.nameRU : card.nameRU, 30),
        nameEN: trim(card.nameEN ? card.nameEN : card.nameRU, 30),
      };
      return resCard;
    }

    return this.get('', { credentials: 'omit' }).then(
      (cards) => cards.map(fixMovie),
    );
  }
}

const MoviesApi = new BeatfilmMoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default MoviesApi;
