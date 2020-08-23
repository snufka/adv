import React from "react";

export default function Contact() {
  return (
    <div className="row" style={{ paddingBottom: "60px" }} id="Contact">
      <div className="col-6" style={{ textAlign: "center" }}>
        <img
          className="contactImg"
          src="https://www.advalyze.com/wp-content/uploads/2020/07/01-werde-teil-des-teams.svg"
        ></img>
        <h1 className="Dispay-1">
          Become part of the<br></br>
          advalyze teams!
        </h1>
        <br></br>
        <button className="btn btn-secondary btn-lg"> Discover Jobs Now</button>
      </div>
      <div className="col-6" style={{ textAlign: "center" }}>
        <img
          className="contactImg"
          src="https://www.advalyze.com/wp-content/uploads/2020/07/02-entdecke-potenzial.svg"
        ></img>
        <h1 className="Dispay-1">
          Discover your<br></br>
          digital potential!
        </h1>
        <br></br>
        <button className="btn btn-secondary btn-lg"> Contact Now</button>
      </div>
    </div>
  );
}
