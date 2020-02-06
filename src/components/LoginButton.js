import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const LoginButton = () => {
  const authContext = useContext(AuthContext);
  return (
    <button
      className="btn btn-secondary ml-5 mt-5"
      onClick={authContext.toggleLoginStatus}
    >
      {authContext.isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
};

export default LoginButton;
