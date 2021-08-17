import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';

function ProtectedRoute({ component: Component, ...props }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <Route>
      {
        // eslint-disable-next-line react/jsx-props-no-spreading
        currentUser._id ? <Component {...props} /> : <Redirect to="./signin" />
      }
    </Route>
  );
}

export default ProtectedRoute;
