import React from 'react';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import Gallery from '../Gallery/Gallery';
import FilmCard from '../FilmCard/FilmCard';
import SectionSeparator from '../SectionSeparator/SectionSeparator';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import './SavedMovies.css';
import AuthHeader from '../AuthHeader/AuthHeader';
import API from '../../utils/MainApi';
import { search, movieIndex } from '../../utils/utils';

function SavedMovies() {
  const currentUser = React.useContext(CurrentUserContext);
  const [savedCards, setSavedCards] = React.useState([]);
  const [filteredCards, setFilteredCards] = React.useState([]);

  function onDelete(card) {
    return API.deleteMovie(card._id).then(() => {
      const savedIdx = movieIndex(savedCards, card.movieId);
      savedCards.splice(savedIdx, 1);
      setSavedCards([...savedCards]);

      const filteredIdx = movieIndex(filteredCards, card.movieId);
      filteredCards.splice(filteredIdx, 1);
      setFilteredCards([...filteredCards]);
    });
  }

  function handleSearch(searchStr, short) {
    setFilteredCards(search(savedCards, searchStr, short));
  }

  React.useEffect(() => {
    API.getSavedMovies(currentUser._id).then((apiSavedCards) => {
      setSavedCards(apiSavedCards);
      setFilteredCards([...apiSavedCards]);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const cardsShown = [];
  for (let i = 0; i < filteredCards.length; i += 1) {
    const card = filteredCards[i];
    cardsShown.push(
      <FilmCard card={card} key={card.movieId}>
        <button
          className="button saved-movies__delete-button"
          type="button"
          onClick={() => { onDelete(card); }}
        />
      </FilmCard>,
    );
  }

  return (
    <>
      <AuthHeader className="theme_light" />
      <Search onSearch={handleSearch} />
      <SectionSeparator />
      <Gallery>
        {cardsShown}
      </Gallery>
      <Footer />
    </>
  );
}

export default SavedMovies;
