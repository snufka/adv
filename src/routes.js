import React from "react";
import App from "./App";
import Services from "./components/Services";
import NavBar from "../src/components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";

import SieMatic from "./components/SieMatic";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Clients from "./components/Clients";
import Why from "./components/Why";
import Testimonial from "./components/Testimonial";
import Experts from "./components/Experts";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route path="/Services" component={Services} />
        <Route path="/Footer" component={Footer} />
      </Switch>
    </div>
  );
};
