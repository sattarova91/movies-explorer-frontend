import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { API } from '../../utils/api';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

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
  const EMPTY_USER = { name: '', about: '' };
  const [currentUser, setCurrentUser] = React.useState(EMPTY_USER);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const history = useHistory();


  function handleLogin(loggedInUser) {
    setCurrentUser(loggedInUser);
    setLoggedIn(true);
  }

  function handleLogout() {
    API.signOut().then(() => {
      setLoggedIn(false);
      setCurrentUser(EMPTY_USER);
    });
  }

  function authCheck() {
    API.currentUser().then((user) => {
      if (user._id) {
        setLoggedIn(true);
        setCurrentUser(user);
        history.push('/movies');
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  React.useEffect(() => {
    authCheck();
  }, []);

  function onFilmSave(card) {
    return API.saveMovie(card);
  }

  /////

  function handleUpdateUser(user) {
    API.updateCurrentUser(user).then((updatedUser) => {
      setCurrentUser(updatedUser);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>

          <ProtectedRoute exact path="/movies" component={Movies}
            loggedIn={loggedIn} onSave={onFilmSave}
          />
          <ProtectedRoute exact path="/savedmovies" component={SavedMovies}
            loggedIn={loggedIn}
          />
          <ProtectedRoute exact path="/profile" component={Profile}
            loggedIn={loggedIn}
            onLogout={handleLogout}
            onUpdateUser={handleUpdateUser}
          />
          <Route exact path="/signin">
            <Signin onLogin={handleLogin}  loggedIn={loggedIn} />
          </Route>
          <Route exact path="/signup">
            <Signup onLogin={handleLogin}  loggedIn={loggedIn} />
          </Route>
          <Route exact path="/404">
            <NotFound  loggedIn={loggedIn} />
          </Route>
          <Route exact path="/">
            <Main  loggedIn={loggedIn} />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
