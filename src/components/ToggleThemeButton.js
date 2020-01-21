import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ToggleThemeButton = () => {
  return (
    <ThemeContext.Consumer>
      {themeContext => {
        return (
          <button
            className="btn btn-primary"
            onClick={themeContext.toggleTheme}
          >
            toggle theme: current theme is {themeContext.theme}
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ToggleThemeButton;
