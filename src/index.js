import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes"; // where we are going to specify our routes

import App from "./App";
/*ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById("root")
);*/

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
