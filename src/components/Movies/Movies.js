import React from 'react';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import Gallery from '../Gallery/Gallery';
import FilmCard from '../FilmCard/FilmCard';
import SectionSeparator from '../SectionSeparator/SectionSeparator';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Movies.css';
import AuthHeader from '../AuthHeader/AuthHeader';
import API from '../../utils/api';

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

  const [currentCardsNum, setCurrentCardsNum] = React.useState(0);

  React.useEffect(() => {
    // перерисовываем когда был нажат Поиск
    initCardsNum = initCardsNum();
    setCurrentCardsNum(initCardsNum);
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
      cardsShown.push(<FilmCard card={card} key={card.movieId} onSave={onSave} onDelete={() => {}} />)
  }


  return (
    <>
      <AuthHeader className="theme_light" />
      <Search onSearch={handleSearch} />
      <SectionSeparator />
      <Gallery>
        {cardsShown}
      </Gallery>
      <div className={`gallery__more ${currentCardsNum >= filteredCards.length ? "hidden" : "" }`}>
        <button className="button movies__more-button" onClick={handleMoreCardsClick}>Ещё</button>
      </div>
      <Footer />
    </>
  )
}

export default Movies;
