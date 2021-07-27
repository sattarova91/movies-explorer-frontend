import React from 'react';
import './FilmCard.css';

function minutesToHours(allMinutes) {
  const hours = Math.floor(allMinutes/60);
  const minutes = allMinutes % 60;
  return `${hours}ч ${minutes}м`;
}

function FilmCard({card, onSave}) {

  function saveCard(evt) {
    onSave(card).then(() => {
      evt.target.classList.toggle('film-card__save-button_saved');
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="film-card" key={card.id}>
      <img className="film-card__img" src={card.image.url} alt="изображенияФильма" />
      <div className="film-card__about">
        <p className="film-card__title">{card.nameRU}</p>
        <p className="film-card__time">{minutesToHours(card.duration)}</p>
      </div>
      <button className={"button film-card__save-button" + (card.saved ? " hidden" : "")} onClick={saveCard}></button>
      <button className={"button film-card__detele-button" + (card.saved  ? ""  : " hidden")} onClick={saveCard}></button>
    </div>
  )
}

export default FilmCard;
