import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './MobileHeader.css';
import MenuImg from '../../images/menu-icon.svg';
import Popup from '../Popup/Popup';
import Avatar from '../../images/header-img-account.svg';

function MobileHeader() {
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);
  const location = useLocation();


  function closePopup() {
    setIsPopupOpened(false);
  }

  function openPopup() {
    setIsPopupOpened(true);
  }

  return (
    <>
      <nav className="header__mobile-nav">
        <button className="header__mobile-menu-button" type="button" onClick={openPopup}>
          <img className="header__mobile-menu-img" src={MenuImg} alt="меню" />
        </button>
        <Popup name="mobile-menu" isOpen={isPopupOpened} onClose={closePopup}>
          <div className="header-menu__links">
            <Link className={`header-menu__link-main ${location.pathname === '/' ? " active" : ""}`} to="/">Главная</Link>
            <Link className={`header-menu__link-movies ${location.pathname === '/movies' ? " active" : ""}`} to="/movies">Фильмы</Link>
            <Link className={`header-menu__link-saved-movies ${location.pathname === '/savedmovies' ? " active" : ""}`} to="/savedmovies">Сохранённые фильмы</Link>
          </div>
          <div className="header-menu__account">
            <Link className="header-menu__link-account" to="/profile">Аккаунт</Link>
            <img className="header__img-account" alt="аватар" src={Avatar} />
          </div>
        </Popup>
      </nav>
    </>
  );
}

export default MobileHeader;
