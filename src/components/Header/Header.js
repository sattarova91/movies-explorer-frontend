import React from 'react';
import HeaderLogo from '../../images/main-logo.svg';
import './Header.css';

function Header(props) {
  return (
    <div className={`header ${props.className}`}>
      <img className="logo" alt="Логотип" src={HeaderLogo} />
      {props.children}
    </div>
  );
}

export default Header;
