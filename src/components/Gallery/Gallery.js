import React from 'react';
// import Preloader from '../Preloader/Preloader';
import './Gallery.css';

function Gallery({ children }) {
  return (
    <>
      <section className="gallery">
        <div className="gallery__container">
          {children}
        </div>
      </section>
    </>
  );
}

export default Gallery;
