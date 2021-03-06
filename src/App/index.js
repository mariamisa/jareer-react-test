import React from "react";

import { Switch, Route } from "react-router-dom";

import AuthProvider from "../Context/Authorization";

import { Login, Register, Landing, Layout } from "../Pages";

import { PrivateRoutes, LoggedOutRoutes } from "./Routes";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Switch>
          <PrivateRoutes exact path="/" component={Landing} />
          <LoggedOutRoutes restricted path="/login" component={Login} />
          <LoggedOutRoutes restricted path="/register" component={Register} />
          <Route>
            <h1>page not found</h1>
          </Route>
        </Switch>
      </Layout>
    </AuthProvider>
  );
}

export default App;