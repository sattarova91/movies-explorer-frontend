import React from 'react';
import './About.css';

function About(props) {
  return (
    <section className="about">
      <h2 id="about" className="about__title">О проекте</h2>
      <div className="about__text-container">
        <div className="about__milestone">
          <p className="about__subtitle">Дипломный проект включал 5&nbsp;этапов</p>
          <p className="about__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
        </div>
        <div className="about__milestone">
          <p className="about__subtitle">На&nbsp;выполнение диплома ушло 5&nbsp;недель</p>
          <p className="about__paragraph">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about__progress-container">
        <p className="about__progress-bar about__progress-bar_green">1&nbsp;неделя</p>
        <p className="about__progress-bar">4&nbsp;недели</p>
        <p className="about__progress-text">Back-end</p>
        <p className="about__progress-text">Front-end</p>
      </div>
    </section>
  )
}

export default About;
