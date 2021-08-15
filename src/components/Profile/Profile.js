import React from 'react';
import './Profile.css';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import AuthHeader from '../AuthHeader/AuthHeader';

function Profile({ onLogout, onUpdateUser }) {
  const [isEditMode, setIsEditMode] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);
  const history = useHistory();

  function handleLogout() {
    onLogout();
    history.push('/');
  }

  return (
    <>
      <AuthHeader className="theme_light" />
      <Formik
        initialValues={{ name: currentUser.name, email: currentUser.email }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Обязательное поле';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Неверный E-mail';
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
          onUpdateUser({
            name: values.name,
            email: values.email,
          });
          setSubmitting(false);
          setIsEditMode(false);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form className="profile__form" onSubmit={handleSubmit}>
            <section className="profile">
              <div className="profile__container">
                <h1 className="profile__title">
                  Привет,
                  {values.name}
                  !
                </h1>
                <div className="profile__name-info">
                  <p className="profile__name">Имя</p>
                  <input
                    className="profile__user-name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </div>
                <div className="profile__email-info">
                  <p className="profile__email">E-mail</p>
                  <input
                    className="profile__user-email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
              </div>
              <div className="profile__options">
                <span className="profile__field-error">{errors.name || errors.email}</span>
                <button className={`button profile__save-button${isEditMode ? '' : ' hidden'}`} type="submit" disabled={errors.name || errors.email}>Сохранить</button>
                <button
                  className={`button profile__edit-button${isEditMode ? ' hidden' : ''}`}
                  type="button"
                  onClick={() => {
                    setIsEditMode(true);
                  }}
                >
                  Редактировать
                </button>
                <button className="button profile__logout-button" type="button" onClick={handleLogout}>Выйти из аккаунта</button>
              </div>
            </section>
          </form>
        )}
      </Formik>
    </>
  );
}

export default Profile;
