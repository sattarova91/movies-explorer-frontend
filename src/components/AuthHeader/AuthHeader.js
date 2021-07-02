import React from 'react';
import Header from '../Header/Header';
import './AuthHeader.css';
import Avatar from '../../images/header-img-account.svg';

function AuthHeader(props) {
  return (
    <Header className="header__auth">
      <nav className="header__nav">
        <div className="header__movies">
          <button className="button header__button-movies">Фильмы</button>
          <button className="button header__button-saved-movies">Сохранённые фильмы</button>
        </div>
        <div className="header__account">
          <button className="button header__button-account">Аккаунт</button>
          <img className="header__img-account" alt="аватар" src={Avatar} />
        </div>
      </nav>
    </Header>
  );
}

export default AuthHeader;
