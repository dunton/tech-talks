import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/ThemeContext';

const ToggleThemeButton = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <Button
      theme={themeContext.theme}
      className="btn"
      onClick={themeContext.toggleTheme}
    >
      toggle theme: current theme is {themeContext.theme}
    </Button>
  );
};

const Button = styled.button`
  background: ${props => (props.theme === 'light' ? 'blue' : 'red')};
  color: white;
  &:hover {
    color: white;
  }
`;

export default ToggleThemeButton;
