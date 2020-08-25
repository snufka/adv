import React, { useState } from "react";
import "../style/sieMatic.css";
import sieProject from "../img/siematic-project.jpg";

export default function SieMatic() {
  const [showData, setShowData] = useState(false);
  return (
    <div className="container-fluid" id="project">
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
          <div
            className="openBtn"
            onClick={() => setShowData(true)}
            style={{ paddingBottom: "10px" }}
          >
            <img
              src="https://www.advalyze.com/wp-content/uploads/2020/07/more-white.svg"
              alt="plus"
            ></img>
          </div>
        </div>

        <div className="col-6" style={{ backgroundColor: "#dcdcdc" }}>
          {!showData && (
            <>
              <img
                src={sieProject}
                alt="sieproject"
                className="siePImg"
                style={{ padding: "0px" }}
              ></img>
            </>
          )}
          {showData && (
            <div
              className="contentOnClick"
              style={{ textAlign: "center", paddingTop: "10px" }}
            >
              <div>
                <div>
                  <p className="lead">
                    The qualified leads are automatically fed into a sales
                    pipeline that is accessible to every retailer. With the help
                    of the digitally collected information and data points,
                    significantly optimized sales processes can be carried out
                    in the future. For the first time, every local dealer has a
                    transparent and structured overview of the new and digitally
                    pre-qualified leads, and can systematically evaluate them in
                    real time in order to generate appointments and ultimately
                    deals faster and more efficiently.
                  </p>
                </div>
                <div className="row ">
                  <div className="col-4">
                    <img src="https://www.advalyze.com/wp-content/uploads/2020/07/traffic.svg"></img>
                    <h3>+80%</h3>
                    <p>traffic</p>
                  </div>
                  <div className="col-4">
                    <img src="https://www.advalyze.com/wp-content/uploads/2020/07/leads.svg"></img>
                    <h3>+60%</h3>
                    <p>leads</p>
                  </div>
                  <div className="col-4">
                    <img src="https://www.advalyze.com/wp-content/uploads/2020/07/haendlersuchen.svg"></img>
                    <h3>+10%</h3>
                    <p>sales conversion</p>
                  </div>
                </div>
                <div>
                  <p className="lead">
                    As a premium kitchen manufacturer, SieMatic is now in a
                    position to make its digital success measurable from the
                    first touchpoint through the sale of the kitchen to the
                    aftersale, and to increase sales significantly through
                    continuous optimization of performance. For the first time
                    it is possible to give a quality assessment of the marketing
                    channels at cost-per-order level and to track them down to
                    the last detail.
                  </p>
                  <div
                    className="closeBtn"
                    onClick={() => setShowData(false)}
                    style={{ paddingBottom: "10px" }}
                  >
                    <img src="https://www.advalyze.com/wp-content/uploads/2020/07/close-black.svg"></img>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/*





*/
