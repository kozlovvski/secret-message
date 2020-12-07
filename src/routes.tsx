import React from "react";
import { Redirect, Switch } from "react-router-dom";

import { AppLayoutRoute } from "./layout/App/App";
import { DefaultLayoutRoute } from "./layout/Default/Default";
import CreateMessagePage from "./pages/CreateMessage/CreateMessage";
import HomePage from "./pages/Home/Home";

const Routes: React.FC = () => (
  <Switch>
    <DefaultLayoutRoute exact path="/" component={HomePage} />
    <AppLayoutRoute exact path="/new" component={CreateMessagePage} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
