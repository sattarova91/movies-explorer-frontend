import React from 'react';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import Gallery from '../Gallery/Gallery';
import SectionSeparator from '../SectionSeparator/SectionSeparator';

import './Movies.css';
import AuthHeader from '../AuthHeader/AuthHeader';
import { BEATFILM_API } from '../../utils/api';

function Movies(props) {
  const [allCards, setAllCards] = React.useState([]);
  const [filteredCards, setFilteredCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      BEATFILM_API.getAllMovies()
    ]).then(([allMovies]) => {
      setAllCards(allMovies);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  function handleSearch(searchStr) {
    searchStr = searchStr.toLowerCase();
    setFilteredCards(
      allCards.filter((card) => {
        return ( card.nameRU && card.nameRU.toLowerCase().includes(searchStr) ) || ( card.nameEN && card.nameEN.toLowerCase().includes(searchStr));
      })
    )
  }

  return (
    <>
      <AuthHeader className="theme_light" />
      <Search onSearch={handleSearch} />
      <SectionSeparator />
      <Gallery cards={filteredCards} />
      <Footer />
    </>
  )
}

export default Movies;
