import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";

import "./App.css";

const App = () => (
  <Switch>
    <Route path="/" exact={true} component={Home} />
    <Redirect to={"/"} />
  </Switch>
);

export default App;
