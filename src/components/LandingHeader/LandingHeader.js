import React from 'react';
import { Link } from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import Header from '../Header/Header';
import './LandingHeader.css';
import AuthHeader from '../AuthHeader/AuthHeader';

function LandingHeader() {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <Header className={`header__landing ${currentUser._id ? ' hidden' : ''}`}>
        <nav className="header__landing-nav">
          <Link to="/signup"><button className="button header__button-signup" type="button">Регистрация</button></Link>
          <Link to="/signin"><button className="button header__button-signin" type="button">Войти</button></Link>
        </nav>
      </Header>
      <AuthHeader className={`theme_dark ${currentUser._id ? '' : ' hidden'}`} />
    </>
  );
}

export default LandingHeader;
