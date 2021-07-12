import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import API from '../../utils/api';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import './App.css';


function App() {
  ///// auth
  const [currentUser, setCurrentUser] = React.useState({ name: '', about: '' });
  const [loggedIn, setLoggedIn] = useState(false);


  function handleLogin(loggedInUser) {
    console.log(loggedInUser)
    setCurrentUser(loggedInUser);
    setLoggedIn(true);
  }

  function authCheck() {
    API.currentUser().then((user) => {
      if (user._id) {
        //setLoggedIn(true);
        setCurrentUser(user);
        //history.push('/');
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    authCheck();
  }, []);

  React.useEffect(() => {
    if (currentUser._id) {
      Promise.all([
        console.log(currentUser)
        //API.getInitialCards()
      ]).then(([apiCards]) => {
        //setCards(apiCards);
      }).catch((err) => {
        console.log(err);
      });
    }
  }, [currentUser]);

  /////

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/savedmovies">
            <SavedMovies />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/signin">
            <Signin onLogin={handleLogin} />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/404">
            <NotFound />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
