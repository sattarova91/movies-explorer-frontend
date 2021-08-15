function search(movies, searchStr, isShort = false) {
  const lowerStr = searchStr.toLowerCase();

  return movies.filter(
    (movie) => (
      (movie.nameRU && movie.nameRU.toLowerCase().includes(lowerStr))
            || (movie.nameEN && movie.nameEN.toLowerCase().includes(lowerStr))
    ) && (isShort ? movie.duration <= 40 : true),
  );
}

function getLocalMovies() {
  const movies = JSON.parse(localStorage.getItem('movies'));
  if (!movies) {
    return [];
  }
  return movies;
}

function setLocalMovies(movies) {
  localStorage.setItem('movies', JSON.stringify(movies));
}

function movieIndex(movies, movieId) {
  return movies.findIndex((movie) => (movieId === movie.movieId));
}

export {
  search, movieIndex, getLocalMovies, setLocalMovies,
};
