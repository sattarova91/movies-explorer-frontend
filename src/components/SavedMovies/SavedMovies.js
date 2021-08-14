import React from 'react';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import Gallery from '../Gallery/Gallery';
import FilmCard from '../FilmCard/FilmCard';
import SectionSeparator from '../SectionSeparator/SectionSeparator';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './SavedMovies.css';
import AuthHeader from '../AuthHeader/AuthHeader';
import API from '../../utils/api';
import { search } from '../../utils/utils';


function SavedMovies(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [savedCards, setSavedCards] = React.useState([]);
  const [filteredCards, setFilteredCards] = React.useState([]);

  function onDelete(card) {
    return API.deleteMovie(card._id).then(() => {
      const savedIdx = API.movieIndex(savedCards, card.movieId);
      savedCards.splice(savedIdx, 1);
      setSavedCards([...savedCards]);

      const filteredIdx = API.movieIndex(filteredCards, card.movieId);
      filteredCards.splice(filteredIdx, 1);
      setFilteredCards([...filteredCards]);
    })
  }

  function handleSearch(searchStr, short) {
    setFilteredCards(search(savedCards, searchStr, short));
  }

  React.useEffect(() => {
    API.getSavedMovies(currentUser._id).then((savedCards) => {
      setSavedCards(savedCards);
      setFilteredCards([...savedCards]);
    }).catch((err) => {
      console.log(err);
    });
  }, []);


  const cardsShown = [];
  for (let i = 0; i < filteredCards.length; i++) {
  const card = filteredCards[i];
    cardsShown.push(
      <FilmCard card={card} key={card.movieId}>
        <button
          className="button saved-movies__delete-button"
          onClick={() => {onDelete(card)}}
        ></button>
      </FilmCard>
    )
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
  )
}

export default SavedMovies;
