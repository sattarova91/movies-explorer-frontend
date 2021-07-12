import React from 'react';
import './FilmCard.css';

function saveCard(evt) {
  evt.target.classList.toggle('film-card__save-button_saved');
}

function MoviesCard(props) {
  return (
    <div className="film-card">
      <img className="film-card__img" src={props.card.src} alt="изображенияФильма" />
      <div className="film-card__about">
        <p className="film-card__title">{props.card.title}</p>
        <p className="film-card__time">{props.card.time}</p>
      </div>
      <button className={"button film-card__save-button" + (props.card.saved ? " hidden" : "")} onClick={saveCard}></button>
      <button className={"button film-card__detele-button" + (props.card.saved  ? ""  : " hidden")} onClick={saveCard}></button>
    </div>
  )
}

export default MoviesCard;
