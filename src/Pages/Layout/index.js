import React, { useContext } from 'react';
import Header from '../../Components/Header';
import { AuthContext } from '../../Context/Authorization';

function Layout({ children }) {
  const { authLoading, error } = useContext(AuthContext);
  return (
    <>
      {error && <h1>{error}</h1>}
      {authLoading ? (
        <h1>loading ...</h1>
      ) : (
        <div>
          <Header />
          {children}
        </div>
      )}
    </>
  );
}


export default Layout;
