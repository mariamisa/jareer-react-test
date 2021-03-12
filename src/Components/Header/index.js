import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Authorization";

import db from "../../firebase/config";
export default function Header() {
  const { isLoggedIn } = useContext(AuthContext);

  const handelLoggedOut = () => {
    db.auth().signOut();
  };

  return (
    <header>
      <nav>
        {isLoggedIn ? (
          <>
            <Link to="/">edit user info</Link>
            <button onClick={handelLoggedOut}>logout</button>
          </>
        ) : (
          <>
            <Link style={{margin:20}} to="/login">login</Link>
            <Link to="/register">register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
