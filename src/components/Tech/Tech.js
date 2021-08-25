import React from 'react';
import './Tech.css';

function Tech() {
  return (
    <section className="tech">
      <h2 className="tech__title">Технологии</h2>
      <div className="tech__container">
        <h3 className="tech__subtitle">7 технологий</h3>
        <p className="tech__paragraph">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
      </div>
      <ul className="tech__icons">
        <li className="tech__icon">HTML</li>
        <li className="tech__icon">CSS</li>
        <li className="tech__icon">JS</li>
        <li className="tech__icon">React</li>
        <li className="tech__icon">Git</li>
        <li className="tech__icon">Express.js</li>
        <li className="tech__icon">mongoDB</li>
      </ul>
    </section>
  );
}

export default Tech;
