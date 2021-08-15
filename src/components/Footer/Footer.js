import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__paragraph">Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__date">&copy;&nbsp;2020</p>
        <nav>
          <ul className="footer__links">
            <li><a className="footer__link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
            <li><a className="footer__link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a></li>
            <li><a className="footer__link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
