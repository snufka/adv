import React from "react";
import App from "./App";
import Services from "./components/Services";
import NavBar from "../src/components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/App" component={App} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Services" component={Services} />
      </Switch>
    </div>
  );
};
