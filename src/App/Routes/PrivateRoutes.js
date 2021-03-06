import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { AuthContext } from '../../Context/Authorization';

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuth, authLoading } = useContext(AuthContext);
  if (isAuth && !authLoading) {
    return (
      <Route {...rest}>
        <Component />
      </Route>
    );
  }
  return <Redirect to='/' />;
}


export default PrivateRoute;
