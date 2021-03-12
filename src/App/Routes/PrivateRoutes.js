import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { AuthContext } from '../../Context/Authorization';

function PrivateRoute({ component: Component, ...rest }) {
  const { isLoggedIn, authLoading } = useContext(AuthContext);
  if (isLoggedIn && !authLoading) {
    return (
      <Route {...rest}>
        <Component />
      </Route>
    );
  }
  return <Redirect to='/' />;
}


export default PrivateRoute;
