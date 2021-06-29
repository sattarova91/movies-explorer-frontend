import React from 'react';
import HeaderLogo from '../../images/main-logo.svg';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup(props) {
  return (
    <section className="signup">
      <div className="signup__container">
        <img className="logo" alt="Логотип" src={HeaderLogo} />
        <h1 className="signup__title">Добро пожаловать!</h1>
        <form className="signup__form">
          <label className="signup__field-container">
            <p className="signup__paragraph">Имя</p>
            <input id="name" className="signup__field" name="name" type="name" placeholder="" />
          </label>
          <label className="signup__field-container">
            <p className="signup__paragraph">E-mail</p>
            <input id="email" className="signup__field" name="email" type="email" placeholder="?" />
          </label>
          <label className="signup__field-container">
            <p className="signup__paragraph">Пароль</p>
            <input id="password" className="signup__field" name="password" type="password" placeholder="" />
          </label>
          <button className="button signup__submit-button" type="submit">Зарегистрироваться</button>
        </form>
        <div className="signup__signin">
          <p className="signup__signin-subtitle">Уже зарегистрированы?</p>
          <Link to="/signin" className="signup__signin-link">Войти</Link>
        </div>
      </div>
    </section>
  )
}

export default Signup;
