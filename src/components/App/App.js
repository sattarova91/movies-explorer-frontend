import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
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
          signin
        </Route>
        <Route exact path="/signup">
          signup
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
