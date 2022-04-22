import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Home from "./Home";

import "./App.css";

const App = () => (
  <Switch>
    <Route path="/" exact={true} component={withAuthenticationRequired(Home)} />
    <Redirect to={"/"} />
  </Switch>
);

export default App;
