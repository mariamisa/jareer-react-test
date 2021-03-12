import React, { useState, useEffect, createContext } from "react";
import Axios from "axios";
import PropTypes from "prop-types";

import db from '../firebase/config'

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState();
  const [authLoading, setAuthLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  db.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
});

  useEffect(() => {
    let isCurrent = true;
    (async () => {
      try {
        setError(null);
        await Axios("https://auth-v1.herokuapp.com/api/v1/is-auth",{
          headers: {"Access-Control-Allow-Origin": "*"}
        });
        if (isCurrent) {
          setIsAuth(true);
          setAuthLoading(false);
        }
      } catch (err) {
        setAuthLoading(false);
        setError(
          err.response ? err.response.data.message : "internal server error"
        );
        setIsAuth(false);
      }
    })();
    return () => {
      isCurrent = false;
    };
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ setIsAuth, isAuth, authLoading, error,isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
export default AuthProvider;
