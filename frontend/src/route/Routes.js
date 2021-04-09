import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  AllDevices,
  ExpensePlanned,
  ExpenseTracker,
  Home,
  LocalWeather,
  Settings,
  ShoppingList,
} from "../pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/devices" component={AllDevices}></Route>
      <Route exact path="/planned" component={ExpensePlanned}></Route>
      <Route exact path="/tracker" component={ExpenseTracker}></Route>
      <Route exact path="/weather" component={LocalWeather}></Route>
      <Route exact path="/settings" component={Settings}></Route>
      <Route exact path="/shopping" component={ShoppingList}></Route>
    </Switch>
  );
};

export default Routes;
