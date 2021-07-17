import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { Formik } from 'formik';
import './Signup.css';

import API from '../../utils/api';


function Signup({ onLogin }) {
  const history = useHistory();

  function handleSubmit(evt) {
    evt.preventDefault();

  }

  return (
    <Formik
      initialValues={{ password: '', email: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Обязательное поле';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Неверный E-mail';
        }
        if (!values.password) {
          errors.password = 'Обязательное поле';
        } else if (
          values.password.length < 8
        ) {
          errors.password = 'Неверный пароль';
        }
        if (!values.name) {
          errors.name = 'Обязательное поле';
        } else if (
          values.name.length < 2 || values.name.length > 30
        ) {
          errors.name = 'Неверное имя';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        API.signUp({
          name: values.name,
          email: values.email,
          password: values.password
        }).then((regUser) => {
          if (regUser._id) {
            console.log({
              level: 'info',
              message: 'Вы успешно зарегистрировались!'
            });
            API.signIn({ email: values.email, password: values.password }).then((loggedInUser) => {
              onLogin(loggedInUser);
              history.push('/movies');
            }).catch((err) => {
              console.log({
                level: 'error',
                message: 'Что-то пошло не так!'
              });
            });
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
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form className="signup__form" onSubmit={handleSubmit}>
          <section className="signup">
            <div className="signup__container">
              <Logo />
              <h1 className="signup__title">Добро пожаловать!</h1>
              <label className="signup__field-container">
                <p className="signup__paragraph">Имя</p>
                <input className="signup__field"
                    type="text"
                    name="name"
                    placeholder="Имя"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name} />
              </label>
              <label className="signup__field-container">
                <p className="signup__paragraph">E-mail</p>
                <input className="signup__field"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email} />
              </label>
              <label className="signup__field-container">
                <p className="signup__paragraph">Пароль</p>
                <input className="signup__field"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password} />
              </label>
              <span className="signup__error">{errors.name || errors.email || errors.password}</span>
            </div>
            <div className="signup__options">
              <button className="button signup__submit-button" type="submit" disabled={errors.email || errors.password || errors.name}>Зарегистрироваться</button>
              <div className="signup__signin">
                <p className="signup__signin-subtitle">Уже зарегистрированы?</p>
                <Link to="/signin" className="signup__signin-link">Войти</Link>
              </div>
            </div>
          </section>
        </form>
      )}
    </Formik>
  )
}

export default Signup;
