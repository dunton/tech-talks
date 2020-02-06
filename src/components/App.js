import React from 'react';
import ListPropsHook from './ListPropsHook';
import ToggleThemeButton from './ToggleThemeButton';
import LoginButton from './LoginButton';

import { ThemeProvider } from '../contexts/ThemeContext';
import { AuthContextProvider } from '../contexts/AuthContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <ThemeProvider>
          <ListPropsHook />
          <ToggleThemeButton />
          <LoginButton />
        </ThemeProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
