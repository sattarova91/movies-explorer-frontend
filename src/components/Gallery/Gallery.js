import React from 'react';
//import Preloader from '../Preloader/Preloader';
import FilmCard from '../FilmCard/FilmCard';
import './Gallery.css';

function Gallery(props) {
  const { innerWidth } = window;
  let cardsFetchNum = 0;
  if (innerWidth >= 1280) {
    cardsFetchNum = 12;
  } else if (innerWidth >= 768) {
    cardsFetchNum = 8;
  } else {
    cardsFetchNum = 5;
  }

  const [currentCardsNum, setCurrentCardsNum] = React.useState(cardsFetchNum);

  function handleMoreCards() {
    const { innerWidth } = window;
    const moreCardsNum = innerWidth >= 1280 ? 3 : 2;
    console.log(moreCardsNum , currentCardsNum)
    setCurrentCardsNum(currentCardsNum + moreCardsNum);
    console.log(currentCardsNum);
  }

  return (
    <>
      <section className="gallery">
        <div className="gallery__container">
          {props.cards.map(
            (card) => {
              return <FilmCard card={card} />
            }
          )}
        </div>
        <div className="gallery__more">
          <button className="button gallery__more-button" onClick={handleMoreCards}>Ещё</button>
        </div>
      </section>
    </>
  )
}

export default Gallery;
