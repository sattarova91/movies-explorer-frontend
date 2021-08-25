import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import Logo from '../Logo/Logo';
import './Signin.css';

import { MessageContext } from '../../contexts/MessageContext';
import API from '../../utils/MainApi';

function Signin({ onLogin }) {
  const history = useHistory();
  const { add:addMessage } = React.useContext(MessageContext);

  return (
    <Formik
      initialValues={{ password: '', email: '' }}
      validate={(values) => {
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
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        API.signIn({ email: values.email, password: values.password }).then((loggedInUser) => {
          onLogin(loggedInUser);
          history.push('/movies');
        }).catch((err) => {
          addMessage("Ошибка", err);
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
        <form className="signin__form" onSubmit={handleSubmit}>
          <section className="signin">
            <div className="signin__container">
              <Logo />
              <h1 className="signin__title">Рады видеть!</h1>
              <label className="signin__field-container">
                <p className="signup__paragraph">E-mail</p>
                <input
                  className="signin__field"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <span className="signin__field-error">{errors.email}</span>
              </label>
              <label className="signin__field-container">
                <p className="signup__paragraph">Пароль</p>
                <input
                  className="signin__field"
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <span className="signin__field-error">{errors.password}</span>
              </label>
            </div>
            <div className="signup__options">
              <button className="button signin__submit-button" type="submit" disabled={errors.email || errors.password}>Войти</button>
              <div className="signin__signup">
                <p className="signin__signup-subtitle">Ещё не зарегистрированы?</p>
                <Link to="/signup" className="signin__signup-link">Регистрация</Link>
              </div>
            </div>
          </section>
        </form>
      )}
    </Formik>
  );
}

export default Signin;
