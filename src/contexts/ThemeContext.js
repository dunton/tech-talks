import React, { useState } from 'react';

const ThemeContext = React.createContext({
  theme: 'light'
});

const ThemeProvider = props => {
  const [theme, setTheme] = useState('light');
  const state = { theme };
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
// class ThemeContext extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       theme: 'light'
//     };
//   }
//   render() {
//     return (
//       <themeContext.Provider
//         value={{
//           state: this.state,
//           toggleTheme: () => {
//             this.setState({
//               theme: this.state.theme === 'light' ? 'dark' : 'light'
//             });
//           }
//         }}
//       >
//         {this.props.children}
//       </themeContext.Provider>
//     );
//   }
// }

export { ThemeContext, ThemeProvider };
