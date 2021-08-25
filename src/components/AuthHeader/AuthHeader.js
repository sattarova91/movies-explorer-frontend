import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import MobileHeader from '../MobileHeader/MobileHeader';
import './AuthHeader.css';
import Avatar from '../../images/header-img-account.svg';

function AuthHeader({ className }) {
  const location = useLocation();

  return (
    <Header className={`header__auth ${className}`}>
      <nav className="header__nav">
        <div className="header__movies">
          <Link className={`header__link-movies ${location.pathname === '/movies' ? ' active' : ''}`} to="/movies">Фильмы</Link>
          <Link className={`header__link-saved-movies ${location.pathname === '/savedmovies' ? ' active' : ''}`} to="/savedmovies">Сохранённые фильмы</Link>
        </div>
        <div className="header__account">
          <Link className="header__link-account" to="/profile">Аккаунт</Link>
          <img className="header__img-account" alt="аватар" src={Avatar} />
        </div>
      </nav>
      <MobileHeader />
    </Header>
  );
}

export default AuthHeader;
