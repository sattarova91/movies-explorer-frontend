import React from 'react';
//import Preloader from '../Preloader/Preloader';
import FilmCard from '../FilmCard/FilmCard';
import './Gallery.css';

function Gallery({ cards, onSave, onDelete }) {
  const [currentCardsNum, setCurrentCardsNum] = React.useState(0);

  React.useEffect(() => {
    // перерисовываем когда был нажат Поиск
    setCurrentCardsNum(initCards);
  }, [cards]);

  function initCards() {
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

  function moreCards() {
    const { innerWidth } = window;
    return innerWidth >= 1280 ? 3 : 2;
  }

  function handleMoreCards() {
    setCurrentCardsNum(currentCardsNum + moreCards());
  }

  const cardsShown = [];
  for (let i = 0; (i < currentCardsNum && i < cards.length); i++) {
      const card = cards[i];
      cardsShown.push(<FilmCard card={card} key={card.id} onSave={onSave} onDelete={onDelete} />)
  }

  return (
    <>
      <section className="gallery">
        <div className="gallery__container">
          {cardsShown}
        </div>
        <div className="gallery__more">
          <button className="button gallery__more-button" onClick={handleMoreCards}>Ещё</button>
        </div>
      </section>
    </>
  )
}

export default Gallery;
