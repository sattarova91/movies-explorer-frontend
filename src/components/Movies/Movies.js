import React from 'react';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import Gallery from '../Gallery/Gallery';
import SectionSeparator from '../SectionSeparator/SectionSeparator';

import './Movies.css';
import AuthHeader from '../AuthHeader/AuthHeader';
import { BEATFILM_API } from '../../utils/api';

function Movies({ onSave }) {
  const [filteredCards, setFilteredCards] = React.useState([]);

  function handleSearch(searchStr) {
    searchStr = searchStr.toLowerCase();

    Promise.all([
      BEATFILM_API.getAllMovies()
    ]).then(([allMovies]) => {
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
      <Gallery cards={filteredCards} onSave={onSave} />
      <Footer />
    </>
  )
}

export default Movies;
