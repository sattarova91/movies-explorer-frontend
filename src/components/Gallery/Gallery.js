import React from 'react';
import Preloader from '../Preloader/Preloader';
import FilmCard from '../FilmCard/FilmCard';
import './Gallery.css';

function Gallery(props) {
  return (
    <>
      <section className="gallery">
        {props.cards.map(
          (card) => {
            return <FilmCard card={card} />
          }
        )}
      </section>
      <Preloader />
    </>
  )
}

export default Gallery;
