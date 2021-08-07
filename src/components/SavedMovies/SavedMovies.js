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


function SavedMovies(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [savedCards, setSavedCards] = React.useState([]);
  const [filteredCards, setFilteredCards] = React.useState([]);

  function onDelete(card) {
    return API.deleteMovie(card._id).then(() => {
      const idx = API.movieIndex(savedCards, card.movieId);
      savedCards.splice(idx, 1);
      setSavedCards([...savedCards]);
    })
  }

  function handleSearch(searchStr) {
    searchStr = searchStr.toLowerCase();

    setFilteredCards(
      savedCards.filter((card) => {
        return ( card.nameRU && card.nameRU.toLowerCase().includes(searchStr) ) || ( card.nameEN && card.nameEN.toLowerCase().includes(searchStr));
      })
    );
  }

  React.useEffect(() => {
    API.getSavedMovies(currentUser._id).then((savedCards) => {
      setSavedCards(savedCards);
      setFilteredCards(savedCards);
    }).catch((err) => {
      console.log(err);
    });
  }, []);


  const cardsShown = [];
  for (let i = 0; i < filteredCards.length; i++) {
      const card = filteredCards[i];
      cardsShown.push(<FilmCard card={card} key={card.movieId} onSave={() => {}} onDelete={onDelete} />)
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
