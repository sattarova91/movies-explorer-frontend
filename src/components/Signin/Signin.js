import React from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import './Signin.css';

function Signin(props) {
  return (
    <section className="signin">
      <div className="signin__container">
        <Logo />
        <h1 className="signin__title">Рады видеть!</h1>
        <form className="signin__form">
          <label className="signin__field-container">
            <p className="signup__paragraph">E-mail</p>
            <input id="email" className="signin__field" name="email" type="email" placeholder="?" />
          </label>
          <label className="login__field-container">
            <p className="signup__paragraph">Пароль</p>
            <input id="password" className="signin__field" name="password" type="password" placeholder="" />
          </label>
          <button className="signin__submit-button" type="submit">Войти</button>
        </form>
        <div className="signin__signup">
          <p className="signin__signup-subtitle">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="signin__signup-link">Регистрация</Link>
        </div>
      </div>
    </section>
  );
}

export default Signin;
