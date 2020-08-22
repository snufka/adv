import React from "react";
import background from "../img/background.JPG";
import Logo from "../img/logoadv.png";

export default function Header() {
  const headerImage = {
    display: "fixed",
  };
  return (
    <div>
      <div className="row">
        <div className="col">
          <img src={Logo} alt="logo"></img>
        </div>
        <div className="col-6">
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
          <img src={background} alt="background" style={{}}></img>
        </div>
      </div>
    </div>
  );
}
