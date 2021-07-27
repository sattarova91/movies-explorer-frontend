import React from 'react';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import Gallery from '../Gallery/Gallery';
import SectionSeparator from '../SectionSeparator/SectionSeparator';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Movies.css';
import AuthHeader from '../AuthHeader/AuthHeader';
import { BEATFILM_API } from '../../utils/api';
import { API } from '../../utils/api';

function Movies(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [filteredCards, setFilteredCards] = React.useState([]);

  function onSave(card) {
    return API.saveMovie(card);
  }

  function onDelete(card) {
    return API.deleteMovie(card._id);
  }

  function handleSearch(searchStr) {
    searchStr = searchStr.toLowerCase();


    Promise.all([
      BEATFILM_API.getAllMovies(), API.getSavedMovies(currentUser._id)
    ]).then(([allMovies, savedMovies]) => {
      savedMovies.forEach((savedCard) => {
        const idx = allMovies.findIndex((card) => {
          return card.id === savedCard.movieId
        });
        if (idx !== -1) {
          allMovies[idx]._id = savedCard._id
          allMovies[idx].saved = true
        }
      })
      setFilteredCards(
        allMovies.filter((card) => {
          return ( card.nameRU && card.nameRU.toLowerCase().includes(searchStr) ) || ( card.nameEN && card.nameEN.toLowerCase().includes(searchStr));
        })
      );
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
      <AuthHeader className="theme_light" />
      <Search onSearch={handleSearch} />
      <SectionSeparator />
      <Gallery cards={filteredCards} onSave={onSave} onDelete={onDelete} />
      <Footer />
    </>
  )
}

export default Movies;
