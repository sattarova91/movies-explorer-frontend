import React from 'react';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import Gallery from '../Gallery/Gallery';
import Preloader from '../Preloader/Preloader';
import FilmCard from '../FilmCard/FilmCard';
import SectionSeparator from '../SectionSeparator/SectionSeparator';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Movies.css';
import AuthHeader from '../AuthHeader/AuthHeader';
import API from '../../utils/api';
import { search } from '../../utils/utils';

function Movies(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [filteredCards, setFilteredCards] = React.useState([]);
  const [preloader, setPreloader] = React.useState(false);

  function onSave(card) {
    // card._id присутствует только у сохранённого фильма
    API.saveMovie(card).then((res) => {
      const idx = API.movieIndex(filteredCards, card.movieId);
      filteredCards[idx]._id = res._id;
      setFilteredCards([...filteredCards]);
    }).catch((err) => {
      console.log(err);
    });
  }

  function handleSearch(searchStr, isShort) {
    setFilteredCards([]);
    setPreloader(true)
    API.getAllMovies(currentUser._id).then((allMovies) => {
      setFilteredCards(search(allMovies, searchStr, isShort));
      setPreloader(false)
    }).catch((err) => {
      console.log(err);
      setPreloader(false)
    });
  }

  const [currentCardsNum, setCurrentCardsNum] = React.useState(0);

  React.useEffect(() => {
    // перерисовываем когда был нажат Поиск
    setCurrentCardsNum(initCardsNum());
  }, [filteredCards]);

  function initCardsNum() {
    const { innerWidth } = window;
    let initCardsNum = 0;
    if (innerWidth >= 1280) {
      initCardsNum = 12;
    } else if (innerWidth >= 768) {
      initCardsNum = 8;
    } else {
      initCardsNum = 5;
    }

    return initCardsNum;
  }

  function moreCardsNum() {
    const { innerWidth } = window;
    return innerWidth >= 1280 ? 3 : 2;
  }

  function handleMoreCardsClick() {
    setCurrentCardsNum(currentCardsNum + moreCardsNum());
  }

  const cardsShown = [];
  for (let i = 0; (i < currentCardsNum && i < filteredCards.length); i++) {
    const card = filteredCards[i];
    cardsShown.push(
      <FilmCard card={card} key={card.movieId}>
        <button
          className="button movies__save-button"
          disabled={card._id}
          onClick={() => {onSave(card)}}
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
        <Preloader className={preloader ? "" : "hidden"}/>
      </Gallery>
      <div className={`movies__more ${currentCardsNum >= filteredCards.length ? "hidden" : "" }`}>
        <button className="button movies__more-button" onClick={handleMoreCardsClick}>Ещё</button>
      </div>
      <Footer />
    </>
  )
}

export default Movies;
