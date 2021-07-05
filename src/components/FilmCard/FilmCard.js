import React from 'react';
import './FilmCard.css';

function saveCard(evt) {
  evt.target.classList.toggle('saved');
}

function MoviesCard(props) {
  return (
    <div className="film-card">
      <img className="film-card__img" src={props.card.src} alt="" />
      <div className="film-card__about">
        <p className="film-card__title">{props.card.title}</p>
        <p className="film-card__time">{props.card.time}</p>
      </div>
      <button id="film-card-save-button" className="button experementinput" onClick={saveCard}>Сохранить</button>
    </div>
  )
}

export default MoviesCard;
