import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

function Header({ className, children }) {
  return (
    <div className={`header ${className}`}>
      <Logo />
      {children}
    </div>
  );
}

export default Header;
