import React from 'react';
import HeaderLogo from '../../images/main-logo.svg';
import './Header.css';

function Header(props) {
  return (
    <header className="header">
      <img className="logo" alt="Логотип" src={HeaderLogo} />
      <nav>
        <button className="button header__button-signup">Регистрация</button>
        <button className="button header__button-signin">Войти</button>
      </nav>
    </header>
  )
}

export default Header;
