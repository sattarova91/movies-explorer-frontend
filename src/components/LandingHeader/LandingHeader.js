import React from 'react';
import Header from '../Header/Header';
import './LandingHeader.css';
import { Link } from 'react-router-dom';

function LandingHeader(props) {
  return (
    <Header className="header__landing">
      <nav>
        <Link to="/signup"><button className="button header__button-signup">Регистрация</button></Link>
        <Link to="/signin"><button className="button header__button-signin">Войти</button></Link>
      </nav>
    </Header>
  );
}

export default LandingHeader;
