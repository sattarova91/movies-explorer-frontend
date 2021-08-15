import React from 'react';
import './FilmCard.css';

function minutesToHours(allMinutes) {
  const hours = Math.floor(allMinutes / 60);
  const minutes = allMinutes % 60;
  return `${hours}ч ${minutes}м`;
}

function FilmCard({ card, children }) {
  return (
    <div className="film-card">
      <img className="film-card__img" src={card.image} alt="изображенияФильма" />
      <div className="film-card__about">
        <p className="film-card__title">{card.nameRU}</p>
        <p className="film-card__time">{minutesToHours(card.duration)}</p>
      </div>
      {children}
    </div>
  );
}

export default FilmCard;
