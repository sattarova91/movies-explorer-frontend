import React from 'react';
import './MobileHeader.css';
import MenuImg from '../../images/menu-icon.svg';
import Popup from '../Popup/Popup';
import { Link } from 'react-router-dom';
import Avatar from '../../images/header-img-account.svg';

function MobileHeader(props) {
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);

  function closePopup() {
    setIsPopupOpened(false);
  }

  function openPopup() {
    setIsPopupOpened(true);
  }

  return (
    <>
      <nav className="header__mobile-nav">
        <button className="header__mobile-menu-button" onClick={openPopup}>
          <img className="header__mobile-menu-img" src={MenuImg} alt="меню" />
        </button>
        <Popup name="mobile-menu" isOpen={isPopupOpened} onClose={closePopup}>
          <div className="header-menu__links">
            <Link className="button header-menu__button-main" to="/">Главная</Link>
            <Link className="button header-menu__button-movies" to="/movies">Фильмы</Link>
            <Link className="button header-menu__button-saved-movies" to="/savedmovies">Сохранённые фильмы</Link>
          </div>
          <div className="header-menu__account">
            <Link className="button header-menu__button-account" to="/profile">Аккаунт</Link>
            <img className="header__img-account" alt="аватар" src={Avatar} />
          </div>
        </Popup>
      </nav>
    </>
  )
}

export default MobileHeader;
