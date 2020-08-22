import React from "react";
import background from "../img/background.JPG";
import Logo from "../img/logoadv.png";
import NavBar from "./NavBar";

export default function Header() {
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
    <div>
      <div className="row" style={{ textAlign: "center" }}>
        <div className="col"></div>
        <div className="col">
          <img src={Logo} alt="logo" style={logoStyle}></img>
        </div>
        <div className="col-6">
          <NavBar />
          <h1 class="display-1">
            Your next<br></br> digital level.
          </h1>

          <p>
            <strong>Growth marketing scales your business model.</strong>
          </p>
          <button type="button" className="btn btn-dark">
            Learn More
          </button>
        </div>
        <div className="col-3">
          <img src={background} alt="background" style={headerImage}></img>
        </div>
      </div>
    </div>
  );
}
