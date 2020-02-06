import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = props => {
  const [isLoggedIn, setLogin] = useState(false);
  const state = { isLoggedIn };
  const toggleLoginStatus = () => {
    if (isLoggedIn) {
      setLogin(false);
      return;
    }

    setLogin(true);
  };
  return (
    <AuthContext.Provider value={{ ...state, toggleLoginStatus }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
