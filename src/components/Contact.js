import React from "react";

export default function Contact() {
  return (
    <div
      className="row justify-content-md-center"
      style={{ paddingBottom: "60px" }}
      id="contact"
    >
      <div className="col-4" style={{ textAlign: "center" }}>
        <img
          className="contactImg"
          style={{ marginBottom: "10px" }}
          src="https://www.advalyze.com/wp-content/uploads/2020/07/01-werde-teil-des-teams.svg"
        ></img>
        <h1 className="Dispay-1">
          Become part of the<br></br>
          advalyze teams!
        </h1>
        <br></br>
        <a href="https://advalyze-jobs.personio.de/">
          <button className="btn btn-secondary btn-lg">
            Discover Jobs Now
          </button>
        </a>
      </div>
      <div className="col-4" style={{ textAlign: "center" }}>
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
