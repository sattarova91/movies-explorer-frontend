import React from 'react';
import MainLogo from '../../images/landing-logo.svg';
import './Main.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Main(props) {
  return (
    <>
      <Header>
      </Header>
      <section className="landing">
        <div className="landing__info-container">
          <h1 className="landing__title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="landing__subtitle">Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его создателя.</p>
          <button className="button landing__info-button">Узнать больше</button>
        </div>
        <img className="landing__img" alt="Логотип??????????" src={MainLogo} />
      </section>
      <section className="tech">
        <h2 className="tech__title">Технологии</h2>
        <div className="tech__container">
          <h3 className="tech__subtitle">7 технологий</h3>
          <p className="tech__paragraph">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
          <ul className="tech__icons">
            <li className="tech__icon">HTML</li>
            <li className="tech__icon">CSS</li>
            <li className="tech__icon">JS</li>
            <li className="tech__icon">React</li>
            <li className="tech__icon">Git</li>
            <li className="tech__icon">Express.js</li>
            <li className="tech__icon">mongoDB</li>
          </ul>
        </div>
      </section>
      <section className="about">
        <h2 className="about__title">О проекте</h2>
        <div className="about__text-container">
          <p className="about__subtitle">Дипломный проект включал 5&nbsp;этапов</p>
          <p className="about__subtitle">На&nbsp;выполнение диплома ушло 5&nbsp;недель</p>
          <p className="about__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
          <p className="about__paragraph">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="about__progress-container">
        <p className="about__progress-bar about__progress-bar_green">1&nbsp;неделя</p>
        <p className="about__progress-bar">4&nbsp;недели</p>
          <p className="about__progress-text">Back-end</p>
          <p className="about__progress-text">Front-end</p>
        </div>
      </section>
      <Footer>
      </Footer>
    </>
  )
}

export default Main;
