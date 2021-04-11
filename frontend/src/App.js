import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Wrapper from "components/Wrapper/Wrapper";
import GlobalStyle from "components/GlobalStyle/GlobalStyle";
import Routes from "route/Routes";
import NavBar from "components/NavBar/NavBar";

const App = () => {
  return (
    <Router>
      <Wrapper>
        <NavBar />
        <Routes />
      </Wrapper>
      <GlobalStyle />
    </Router>
  );
};

export default App;
