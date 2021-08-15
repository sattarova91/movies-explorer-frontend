import React from 'react';
import './Preloader.css';

const Preloader = ({ className }) => (
  <div className={`preloader ${className}`}>
    <div className="preloader__container">
      <span className="preloader__round" />
    </div>
  </div>
);

export default Preloader;
