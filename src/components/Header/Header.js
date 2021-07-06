import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

function Header(props) {
  return (
    <div className={`header ${props.className}`}>
      <Logo />
      {props.children}
    </div>
  );
}

export default Header;
