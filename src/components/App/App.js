import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';
import { MessageContext } from '../../contexts/MessageContext';

import API from '../../utils/MainApi';
import {
  lsGetUser, lsSetUser,
  isSameUser, EMPTY_USER,
} from '../../utils/user';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import GlobalPopup from '../GlobalPopup/GlobalPopup';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = React.useState(lsGetUser());
  const { add:addMessage } = React.useContext(MessageContext);

  function handleLogin(loggedInUser) {
    setCurrentUser(loggedInUser);
    lsSetUser(loggedInUser);
  }

  function handleLogout() {
    API.signOut().then(() => {
      setCurrentUser(EMPTY_USER);
      lsSetUser(EMPTY_USER);
    }).catch((err) => {
      addMessage("Ошибка", err);
    });
  }

  function authCheck() {
    API.currentUser().then((user) => {
      if (user._id) {
        if (!isSameUser(user, lsGetUser())) {
          setCurrentUser(user);
          lsSetUser(user);
        }
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  React.useEffect(() => {
    authCheck();
  }, []);

  function handleUpdateUser(user) {
    return API.updateCurrentUser(user).then((updatedUser) => {
      setCurrentUser(updatedUser);
      lsSetUser(updatedUser);
      addMessage("", "Сохранено");
    }).catch((err) => {
      addMessage("Ошибка", err);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
          />
          <ProtectedRoute
            exact
            path="/savedmovies"
            component={SavedMovies}
          />
          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            onLogout={handleLogout}
            onUpdateUser={handleUpdateUser}
          />
          <Route exact path="/signin">
            <Signin onLogin={handleLogin} />
          </Route>
          <Route exact path="/signup">
            <Signup onLogin={handleLogin} />
          </Route>
          <Route exact path="/404">
            <NotFound />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </div>
      <GlobalPopup />
    </CurrentUserContext.Provider>
  );
}
export default App;
