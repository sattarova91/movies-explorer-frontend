import React from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useHistory } from 'react-router-dom';
import AuthHeader from '../AuthHeader/AuthHeader';

function Profile({ onLogout, onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);
  const history = useHistory();

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleLogout() {
    onLogout();
    history.push('/');
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name,
      email,
    });
  }

  return (
    <>
      <AuthHeader />
      <form className="profile__form" onSubmit={handleSubmit}>

        <section className="profile">
          <div className="profile__container">
            <h1 className="profile__title">Привет, {name}!</h1>
            <div className="profile__name-info">
              <p className="profile__name">Имя</p>
              <input className="profile__user-name" onChange={handleChangeName} value={name} />
            </div>
            <div className="profile__email-info">
              <p className="profile__email">E-mail</p>
              <input className="profile__user-email" onChange={handleChangeEmail} value={email} />
            </div>
          </div>
          <div className="profile__options">
            <button className="button profile__edit-button">Редактировать</button>
            <button className="button profile__logout-button" onClick={handleLogout}>Выйти из аккаунта</button>
          </div>
        </section>
      </form>
    </>
  )
}

export default Profile;
