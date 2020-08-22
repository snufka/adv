import React from "react";
import sieStyle from "../style/sieMatic.css";
import sieProject from "../img/siematic-project.jpg";
import plus from "../img/plus.JPG";

export default function SieMatic() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-6"
          style={{
            backgroundColor: "#0068FF",
            textAlign: "center",
            paddingTop: "40px",
            color: "white",
          }}
        >
          <h4>SieMatic</h4>
          <div className="project">
            <h2>Marketing automation</h2>
          </div>
          <h4>
            How SieMatic increased qualified <br></br>lead conversion to over
            10%
          </h4>
          <p className="lead">
            As a result of our digital project, SieMatic is now positioning
            itself as a digital leader in the premium kitchen segment. By
            implementing a CRM with marketing automation and a digital marketing
            strategy, we build the bridge from the first customer contact to the
            qualified handover to a dealer to the final kitchen purchase. With
            the help of various contact modules on the website, the interest of
            potential customers is aroused and leads are sustainably generated.
            Marketing automation qualifies the leads with an individual
            approach, the right content at the right time, right up to potential
            customers, and digitally guides them in the best possible way to a
            specific studio visit.
          </p>
          <br></br>
          <img src={plus} alt="plus"></img>
        </div>
        <div className="col-6">
          <img src={sieProject} alt="sieproject" className="siePImg"></img>
        </div>
      </div>
    </div>
  );
}
