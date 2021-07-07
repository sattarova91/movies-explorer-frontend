import React from 'react';
import './Profile.css';
import AuthHeader from '../AuthHeader/AuthHeader';

function Profile(props) {
  return (
    <>
      <AuthHeader />
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <div className="profile__name-info">
            <p className="profile__name">Имя</p>
            <p className="profile__user-name">Виталий</p>
          </div>
          <div className="profile__email-info">
            <p className="profile__email">E-mail</p>
            <p className="profile__user-email">pochta@yandex.ru</p>
          </div>
        </div>
        <div className="profile__options">
          <button className="button profile__edit-button">Редактировать</button>
          <button className="button profile__logout-button">Выйти из аккаунта</button>
        </div>
      </section>
    </>
  )
}

export default Profile;
