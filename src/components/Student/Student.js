import React from 'react';
import StudentPhoto from '../../images/student-photo.jpg';
import StudentLinkImg from '../../images/student-link-img.svg';
import './Student.css';

function Student(props) {
  return (
    <section className="student">
      <h2 className="student__title">Студент</h2>
      <div className="student__info">
        <div className="student__container">
          <h3 className="student__name">Виталий</h3>
          <p className="student__job">Фронтенд-разработчик, 30&nbsp;лет</p>
          <p className="student__about">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена
            и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <ul className="student__links">
            <li><a className="student__link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a className="student__link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </div>
        <img className="student__image" alt="ФотоСтудента" src={StudentPhoto} />
      </div>
      <div className="student__portfolio">
        <p className="student__paragraph">Портфолио</p>
        <nav>
          <ul className="student__portfolio-links">
            <li className="student__portfolio-container">
              <a className="student__portfolio-link" href="" rel="noreferrer">
                Статичный сайт
                <img className="student__link-img" src={StudentLinkImg} alt="ФотоСтудента" />
              </a>
            </li>
            <li className="student__portfolio-container">
              <a className="student__portfolio-link" href="" rel="noreferrer">
                Адаптивный сайт
                <img className="student__link-img" src={StudentLinkImg} alt="Ссылка" />
              </a>
            </li>
            <li className="student__portfolio-container">
              <a className="student__portfolio-link" href="" rel="noreferrer">
                Одностраничное приложение
                <img className="student__link-img" src={StudentLinkImg} alt="Ссылка" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Student;
