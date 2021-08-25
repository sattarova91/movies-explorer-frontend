import React from 'react';

import CurrentUserContext from '../../contexts/CurrentUserContext';
import { MessageContext } from '../../contexts/MessageContext';

import API from '../../utils/MainApi';
import {
  search, movieIndex, getLocalMovies, setLocalMovies,
} from '../../utils/utils';

import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import Gallery from '../Gallery/Gallery';
import Preloader from '../Preloader/Preloader';
import FilmCard from '../FilmCard/FilmCard';
import SectionSeparator from '../SectionSeparator/SectionSeparator';
import AuthHeader from '../AuthHeader/AuthHeader';

import './Movies.css';


function Movies({ location }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [allMovies, setAllMovies] = React.useState(getLocalMovies());
  const [filteredCards, setFilteredCards] = React.useState([]);

  const [preloader, setPreloader] = React.useState(false);
  const [infoMessage, setInfoMessage] = React.useState('');

  const { add:addMessage } = React.useContext(MessageContext);

  function toggleSaveCard(card) {
    // card._id присутствует только у сохранённого фильма
    if (card._id) {
      API.deleteMovie(card._id).then(() => {
        const idx = movieIndex(filteredCards, card.movieId);
        filteredCards[idx]._id = null;
        setFilteredCards([...filteredCards]);
      }).catch((err) => {
        addMessage("Ошибка", err);
      });
    } else {
      API.saveMovie(card).then((res) => {
        const idx = movieIndex(filteredCards, card.movieId);
        filteredCards[idx]._id = res._id;
        setFilteredCards([...filteredCards]);
      }).catch((err) => {
        addMessage("Ошибка", err);
      });
    }
  }

  function handleSearch(searchStr, isShort) {
    setInfoMessage('');
    setFilteredCards([]);
    setPreloader(true);

    const res = search(allMovies, searchStr, isShort);
    setFilteredCards(res);
    setPreloader(false);
    if (!res.length) {
      setInfoMessage('ничего не найдено');
    }
  }

  const [currentCardsNum, setCurrentCardsNum] = React.useState(0);

  function initCardsNum() {
    const { innerWidth } = window;
    let cardsNum = 0;
    if (innerWidth >= 1280) {
      cardsNum = 12;
    } else if (innerWidth >= 768) {
      cardsNum = 8;
    } else {
      cardsNum = 5;
    }

    return cardsNum;
  }

  React.useEffect(() => {
    API.getAllMovies(currentUser._id).then((allMovies) => {
      setAllMovies(allMovies);
      setLocalMovies(allMovies);
    }).catch((err) => {
      addMessage("Ошибка", err);
    });
    setCurrentCardsNum(initCardsNum());
  }, []);

  function moreCardsNum() {
    const { innerWidth } = window;
    return innerWidth >= 1280 ? 3 : 2;
  }

  function handleMoreCardsClick() {
    setCurrentCardsNum(currentCardsNum + moreCardsNum());
  }

  const cardsShown = [];
  for (let i = 0; (i < currentCardsNum && i < filteredCards.length); i += 1) {
    const card = filteredCards[i];
    cardsShown.push(
      <FilmCard card={card} key={card.movieId}>
        <button
          className={`button movies__save-button ${card._id ? 'saved' : ''}`}
          type="button"
          aria-label="Сохранить фильм"
          onClick={() => { toggleSaveCard(card); }}
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
        <Preloader className={preloader ? '' : 'hidden'} />
      </Gallery>
      <div className={`movies__more ${currentCardsNum >= filteredCards.length ? 'hidden' : ''}`}>
        <button className="button movies__more-button" type="button" onClick={handleMoreCardsClick}>Ещё</button>
      </div>
      <div>
        <p className="movies__info-msg">{infoMessage}</p>
      </div>
      <Footer />
    </>
  );
}

export default Movies;
