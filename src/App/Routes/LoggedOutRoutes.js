import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { AuthContext } from '../../Context/Authorization';

function LoggedOutRoutes({ component: Component, restricted, ...rest }) {
  const { isAuth, authLoading } = useContext(AuthContext);
  if (!isAuth && restricted && !authLoading) {
    return (
      <Route {...rest}>
        <Component />
      </Route>
    );
  }
  return <Redirect to='/' />;
}


export default LoggedOutRoutes;
