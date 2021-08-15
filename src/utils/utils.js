function search(movies, searchStr, isShort = false) {
  const lowerStr = searchStr.toLowerCase();

  return movies.filter(
    (movie) => (
      (movie.nameRU && movie.nameRU.toLowerCase().includes(lowerStr))
            || (movie.nameEN && movie.nameEN.toLowerCase().includes(lowerStr))
    ) && (isShort ? movie.duration <= 40 : true),
  );
}


function lsGet(key, def) {
  const res = JSON.parse(localStorage.getItem(key));
  if (!res) {
    return def;
  } else {
    return res;
  }
}

function lsSet(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}


function getLocalMovies() {
  return lsGet('movies', []);
}

function setLocalMovies(movies) {
  lsSet('movies', movies)
}

function movieIndex(movies, movieId) {
  return movies.findIndex((movie) => (movieId === movie.movieId));
}

export {
  search, movieIndex, getLocalMovies, setLocalMovies,
  lsGet, lsSet
};
