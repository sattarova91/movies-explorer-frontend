import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound(props) {
  return (
    <section className="error-404">
      <div className="error-404__container">
        <h1 className="error-404__title">404</h1>
        <p className="error-404__paragraph">Страница не&nbsp;найдена</p>
      </div>
      <Link className="button error-404__exit-button" to="/">Назад</Link>
    </section>
  )
}

export default NotFound;
