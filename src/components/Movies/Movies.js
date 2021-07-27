import React from 'react';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import Gallery from '../Gallery/Gallery';
import SectionSeparator from '../SectionSeparator/SectionSeparator';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Movies.css';
import AuthHeader from '../AuthHeader/AuthHeader';
import API from '../../utils/api';

function Movies(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [filteredCards, setFilteredCards] = React.useState([]);

  function onSave(card) {
    console.log(card);
    return API.saveMovie(card);
  }

  function onDelete(card) {
    return API.deleteMovie(card._id);
  }

  function handleSearch(searchStr) {
    searchStr = searchStr.toLowerCase();

    API.getAllMovies(currentUser._id).then((allMovies) => {
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
