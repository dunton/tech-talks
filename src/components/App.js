import React from "react";
import ListPropsHook from "./ListPropsHook";
import ToggleThemeButton from "./ToggleThemeButton";
import LoginButton from "./LoginButton";

import { ThemeProvider } from "../contexts/ThemeContext";
import { AuthContextProvider } from "../contexts/AuthContext";

import styled from "styled-components";

function App() {
  return (
    // <div>
    //   <AuthContextProvider>
    //     <ThemeProvider>
    //       <ListPropsHook />
    //       <ToggleThemeButton />
    //       <LoginButton />
    //     </ThemeProvider>
    //   </AuthContextProvider>
    // </div>
    <Container>
      <img src="./chart.png" />
      <div className="first"></div>
      <div className="second"></div>
      <div className="third"></div>
      <div className="fourth"></div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  max-width: 100vw;
  img {
    max-width: 100%;
  }
  .first {
    top: 22%;
    left: 10%;
    background: rgba(0, 0, 0, 0.5);
    height: 5%;
    width: 20%;
    position: absolute;
  }
`;

export default App;
