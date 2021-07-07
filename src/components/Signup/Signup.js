import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Signup.css';

function Signup(props) {
  return (
    <form className="signup__form">
      <section className="signup">
        <div className="signup__container">
          <Logo />
          <h1 className="signup__title">Добро пожаловать!</h1>
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
            <input id="password" className="signup__field signup__field_password" name="password" type="password" placeholder="" />
          </label>
          <span className="signup__error">Что-то пошло не так...</span>
        </div>
        <div className="signup__options">
          <button className="button signup__submit-button" type="submit">Зарегистрироваться</button>
          <div className="signup__signin">
            <p className="signup__signin-subtitle">Уже зарегистрированы?</p>
            <Link to="/signin" className="signup__signin-link">Войти</Link>
          </div>
        </div>
      </section>
    </form>
  )
}

export default Signup;
