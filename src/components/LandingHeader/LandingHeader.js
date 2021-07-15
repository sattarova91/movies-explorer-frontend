import React from 'react';
import Header from '../Header/Header';
import './LandingHeader.css';
import { Link } from 'react-router-dom';
import AuthHeader from '../AuthHeader/AuthHeader';

function LandingHeader({ loggedIn }) {
  return (
    <>
      <Header className={"header__landing" + (loggedIn ? " hidden" : "")}>
        <nav className="header__landing-nav">
          <Link to="/signup"><button className="button header__button-signup">Регистрация</button></Link>
          <Link to="/signin"><button className="button header__button-signin">Войти</button></Link>
        </nav>
      </Header>
      <AuthHeader className={"theme_dark" + (loggedIn ? "" : " hidden")} />
    </>
  );
}

export default LandingHeader;
