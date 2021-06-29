import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import './App.css';

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/savedmovies">
          savedmovies
        </Route>
        <Route exact path="/profile">
          profile
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
