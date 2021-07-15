import React from 'react';
import Header from '../Header/Header';
import MobileHeader from '../MobileHeader/MobileHeader';
import './AuthHeader.css';
import { Link } from 'react-router-dom';
import Avatar from '../../images/header-img-account.svg';

function AuthHeader(props) {
  return (
    <Header className={`header__auth ${props.className}`}>
      <nav className="header__nav">
        <div className="header__movies">
          <Link to="/movies"><button className="button header__button-movies">Фильмы</button></Link>
          <Link to="/savedmovies"><button className="button header__button-saved-movies">Сохранённые фильмы</button></Link>
        </div>
        <div className="header__account">
          <Link to="/profile"><button className="button header__button-account">Аккаунт</button></Link>
          <img className="header__img-account" alt="аватар" src={Avatar} />
        </div>
      </nav>
      <MobileHeader />
    </Header>
  );
}

export default AuthHeader;
