import React from 'react';
import Header from '../Header/Header';
import './LandingHeader.css';

function LandingHeader(props) {
  return (
    <Header className="header__landing">
      <nav>
        <button className="button header__button-signup">Регистрация</button>
        <button className="button header__button-signin">Войти</button>
      </nav>
    </Header>
  );
}

export default LandingHeader;
