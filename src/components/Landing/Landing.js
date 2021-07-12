import React from 'react';
import MainLogo from '../../images/landing-logo.svg';
import './Landing.css';

function Landing(props) {
  return (
    <section className="landing">
      <div className="landing__info-container">
        <h1 className="landing__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="landing__subtitle">Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его создателя.</p>
        <a href="/#about"><button className="button landing__info-button">Узнать больше</button></a>
      </div>
      <img className="landing__img" alt="Логотип" src={MainLogo} />
    </section>
  )
}

export default Landing;
