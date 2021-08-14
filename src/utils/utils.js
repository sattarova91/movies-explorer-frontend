function search(movies, searchStr, isShort=false) {
    const lowerStr = searchStr.toLowerCase();

    return movies.filter(
        (movie) => {
          return (
            ( movie.nameRU && movie.nameRU.toLowerCase().includes(lowerStr) )
            || ( movie.nameEN && movie.nameEN.toLowerCase().includes(lowerStr))
          ) && (isShort ? movie.duration <= 40 : true)
        }
   )
}

export { search };
