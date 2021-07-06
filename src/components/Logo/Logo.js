import React from 'react';
import HeaderLogo from '../../images/main-logo.svg';
import './Logo.css';
import { Link } from 'react-router-dom';


function Logo(props) {
  return (
      <Link to="/"><img className="logo" alt="Логотип" src={HeaderLogo} /></Link>
  );
}

export default Logo;
