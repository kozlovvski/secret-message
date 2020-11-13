import React from "react";
import { Redirect, Switch } from "react-router-dom";

import { DefaultLayoutRoute } from "./layout/Default/Default";
import HomePage from "./pages/Home/Home";

const Routes: React.FC = () => (
  <Switch>
    <DefaultLayoutRoute exact path="/" component={HomePage} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
