import React from 'react';
import { Link } from 'react-router-dom';

import HeaderLogo from '../../images/main-logo.svg';
import './Logo.css';

function Logo() {
  return (
    <Link to="/"><img className="logo" alt="Логотип" src={HeaderLogo} /></Link>
  );
}

export default Logo;
