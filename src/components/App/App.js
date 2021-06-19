import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';

function App() {
  return (
    <div className="page">
      <Switch>
        <Route path="/movies">
          movies
        </Route>
        <Route path="/savedmovies">
          savedmovies
        </Route>
        <Route path="/profile">
          profile
        </Route>
        <Route path="/signin">
          signin
        </Route>
        <Route path="/signup">
          signup
        </Route>
        <Route path="/">
          <Main></Main>
        </Route>
      </Switch>
    </div>
  );
}
export default App;
