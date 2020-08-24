import React from "react";
import background from "../img/background.JPG";
import Logo from "../img/logoadv.png";
import NavBar from "./NavBar";

export default function () {
  const headerImage = {
    width: "100%",
  };
  const logoStyle = {
    boxSizing: "border-box",
    paddingTop: "60px",
    textAlign: "center",
    maxWidth: "72px",
    height: "auto",
  };
  return (
    <div style={{ minHeight: "100vh" }} id="main">
      <div className="row">
        <div className="col-1"></div>
        <div className="col">
          <img src={Logo} alt="logo" style={logoStyle}></img>
        </div>

        <div className="col-5" style={{ textAlign: "center" }}>
          <h1 className="display-1 bold">
            <strong>
              Your next<br></br> digital level.
            </strong>
          </h1>
          <br></br>
          <p className="lead">
            <strong>Growth marketing scales your business model.</strong>
          </p>
          <br></br>
          <a href="#service">
            <button type="button" className="btn btn-dark">
              Learn More
            </button>
          </a>
        </div>
        <div className="col-4">
          <img src={background} alt="background" style={headerImage}></img>
        </div>
      </div>
    </div>
  );
}
