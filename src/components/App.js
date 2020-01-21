import React from 'react';
import ListPropsHook from './ListPropsHook';
import ToggleThemeButton from './ToggleThemeButton';
import { ThemeProvider } from '../contexts/ThemeContext';

function App() {
  return (
    <div>
      <ThemeProvider>
        <ListPropsHook />
        <ToggleThemeButton />
      </ThemeProvider>
    </div>
  );
}

export default App;
