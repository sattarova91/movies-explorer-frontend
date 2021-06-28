import React from 'react';
import Header from '../Header/Header';
import './AuthHeader.css';

function AuthHeader(props) {
  return (
    <Header className="header__auth">
      <nav>
        <button className="button header__movies">Фильмы</button>
        <button className="button header__saved-movies"></button>
      </nav>
    </Header>
  );
}

export default AuthHeader;
