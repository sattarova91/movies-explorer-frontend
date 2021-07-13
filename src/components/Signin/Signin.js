import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import { Link, useHistory } from 'react-router-dom';
import './Signin.css';

import API from '../../utils/api';


function Signin({ onLogin }) {
  const history = useHistory();

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setUserData({
      ...userData,
      [name]: value
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!userData.email || !userData.password) {
      return;
    }
    API.signIn({ email: userData.email, password: userData.password }).then((loggedInUser) => {
      setUserData({ email: '', password: '' });
      onLogin(loggedInUser);
      history.push('/movies');
    }).catch((err) => {
      console.log({
        level: 'error',
        message: 'Что-то пошло не так!'
      });
    });
  }


  return (
    <form className="signin__form" onSubmit={handleSubmit}>
      <section className="signin">
        <div className="signin__container">
          <Logo />
          <h1 className="signin__title">Рады видеть!</h1>
          <label className="signin__field-container">
            <p className="signup__paragraph">E-mail</p>
            <input id="email" className="signin__field" onChange={handleChange} name="email" type="email" placeholder="E-mail" required />
          </label>
          <label className="signin__field-container">
            <p className="signup__paragraph">Пароль</p>
            <input id="password" className="signin__field" onChange={handleChange} name="password" type="password" placeholder="Пароль" required />
          </label>
        </div>
        <div className="signup__options">
          <button className="button signin__submit-button" type="submit">Войти</button>
          <div className="signin__signup">
            <p className="signin__signup-subtitle">Ещё не зарегистрированы?</p>
            <Link to="/signup" className="signin__signup-link">Регистрация</Link>
          </div>
        </div>
      </section>
    </form>
  );
}

export default Signin;
