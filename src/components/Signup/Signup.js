import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Signup.css';

import API from '../../utils/api';


function Signup(props) {
  const history = useHistory();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
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
    API.signUp({
      name: userData.name,
      email: userData.email,
      password: userData.password
    }).then((regUser) => {
      if (regUser._id) {
        console.log({
          level: 'info',
          message: 'Вы успешно зарегистрировались!'
        });
        history.push('/signin');
      } else {
        console.log({
          level: 'error',
          message: 'Что-то пошло не так!'
        });
      }
    }).catch((err) => {
      console.log({
        level: 'error',
        message: 'Что-то пошло не так!'
      });
    });
  }

  return (
    <form className="signup__form" onSubmit={handleSubmit}>
      <section className="signup">
        <div className="signup__container">
          <Logo />
          <h1 className="signup__title">Добро пожаловать!</h1>
          <label className="signup__field-container">
            <p className="signup__paragraph">Имя</p>
            <input id="name" className="signup__field" onChange={handleChange}  name="name" type="name" placeholder="Имя" required />
          </label>
          <label className="signup__field-container">
            <p className="signup__paragraph">E-mail</p>
            <input id="email" className="signup__field" onChange={handleChange}  name="email" type="email" placeholder="E-mail" required />
          </label>
          <label className="signup__field-container">
            <p className="signup__paragraph">Пароль</p>
            <input id="password" className="signup__field signup__field_password" onChange={handleChange}  name="password" type="password" placeholder="Пароль" required />
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
