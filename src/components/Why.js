import React from "react";

export default function Why() {
  return (
    <div style={{ textAlign: "center" }} className="padding" id="why">
      <div>
        <h1>Why Advalyze?</h1>
      </div>
      <br></br>
      <div
        className="row justify-content-md-center"
        style={{ padddingBottom: "60px" }}
      >
        <div className="col-3">
          <img
            src="https://www.advalyze.com/wp-content/uploads/2020/07/01-schema-f.svg"
            alt="scheme"
          ></img>
          <h3>
            With us there is none<br></br>
            Scheme F.
          </h3>
          <p className="lead">
            We work in iterative steps - data-driven and user-centered. This
            means that our solutions are both pragmatic and individual.
          </p>
        </div>

        <div className="col-3">
          <img
            src="https://www.advalyze.com/wp-content/uploads/2020/07/02-partner-augenhoehe.svg"
            alt="eye"
          ></img>
          <h3>
            Sparring partner on<br></br>
            Eye level
          </h3>
          <p className="lead">
            We see ourselves as part of our customers' team - as long as we
            deliver added value. Creating the necessary trust is an important
            part of our work.
          </p>
        </div>

        <div className="col-3">
          <img
            src="https://www.advalyze.com/wp-content/uploads/2020/07/02-no-bullshit.svg"
            alt="nobs"
          ></img>
          <h3>
            No<br></br>
            Bullshit!
          </h3>
          <p className="lead">
            advalyze stands for accurate, high-quality work with impact.
            Transparency and honest communication are sacred to us because we
            believe in karma.
          </p>
        </div>
      </div>
      <button className="btn btn-secondary btn-lg"> Contact Now</button>
    </div>
  );
}
