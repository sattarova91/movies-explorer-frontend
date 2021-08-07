import React from 'react';
import './FilmCard.css';

function minutesToHours(allMinutes) {
  const hours = Math.floor(allMinutes/60);
  const minutes = allMinutes % 60;
  return `${hours}ч ${minutes}м`;
}

function FilmCard({card, onSave, onDelete}) {
  const [saved, setSaved] = React.useState(card._id !== null);

  function toggleSaveCard(evt) {
    if (saved) {
      onDelete(card).then((res) => {
        setSaved(false);
        card._id = null;
      }).catch((err) => {
        console.log(err);
      });
    } else {
      onSave(card).then((res) => {
        setSaved(true);
        card._id = res._id;
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  return (
    <div className="film-card">
      <img className="film-card__img" src={card.image} alt="изображенияФильма" />
      <div className="film-card__about">
        <p className="film-card__title">{card.nameRU}</p>
        <p className="film-card__time">{minutesToHours(card.duration)}</p>
      </div>
      <button className={"button film-card__save-button" + (saved ? " film-card__save-button_saved " : "")} onClick={toggleSaveCard}></button>
    </div>
  )
}

export default FilmCard;
