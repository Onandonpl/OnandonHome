import React from "react";
import styled from "styled-components/macro";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import GlobalStyle from "./config/GlobalStyle";
import NavBar from "./components/Navbar/NavBar";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Weather from "./pages/Weather";
import Shopping from "./pages/Shopping";
import Expenses from "./pages/Expenses";
import PlannedExpenses from "./pages/PlannedExpenses";

const App = () => {
  return (
    <AppContainer>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/weather" component={Weather} />
          <Route path="/shoppinglist" component={Shopping} />{" "}
          <Route path="/plannedexpenses" component={PlannedExpenses} />
          <Route path="/expenses" component={Expenses} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <GlobalStyle />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
`;
