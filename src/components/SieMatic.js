import React from "react";
import sieStyle from "../style/sieMatic.css";
import sieProject from "../img/siematic-project.jpg";

export default function SieMatic() {
  return (
    <div className="container-fluid" id="SieMatic">
      <div className="row" style={{ padding: "0px" }}>
        <div
          className="col-6"
          style={{
            backgroundColor: "#0068FF",
            textAlign: "center",
            color: "white",
            paddingTop: "60px",
          }}
        >
          <div style={{ marginBottom: "30px" }}>
            <img
              src="https://www.advalyze.com/wp-content/uploads/2020/07/siematic-logo-white.svg"
              alt="siematiclogowhote"
            ></img>
          </div>
          <div className="project">
            <h2
              style={{
                fontWeight: "300 !important",
                fontSize: ".875rem",
              }}
            >
              Marketing automation
            </h2>
          </div>
          <h4 style={{ marginTop: "30px" }}>
            How SieMatic increased qualified <br></br>lead conversion to over
            10%
          </h4>
          <p className="col-11 lead" style={{ marginTop: "30px" }}>
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
          <img
            src="https://www.advalyze.com/wp-content/uploads/2020/07/more-white.svg"
            alt="plus"
          ></img>
        </div>
        <div className="col-6" style={{ backgroundColor: "#dcdcdc" }}>
          <img
            src={sieProject}
            alt="sieproject"
            className="siePImg"
            style={{ padding: "0px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}
