import React from "react";
import plus from "../img/plus.JPG";

import servicesStyle from "../style/ServStyle.css";

export default function Services() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#f8f8f8", justifyContent: "center" }}
    >
      <div
        className="row"
        style={{
          justifyContent: "center",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div>
          <h2>Our Sevices</h2>
          <p className="lead">
            With the right growth strategy, we combine marketing with technology
            in order to increase our <br></br>
            customers' added value along the entire digital funnel.
          </p>
        </div>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <div className="col-4">
          <div className="growthMarketingImg"></div>
          <h1>01</h1>

          <h4>Growth arketing</h4>
          <p className="lead">
            With growth marketing, we bring your marketing to the level of a
            digital leader. The right communication at all relevant touchpoints
            of your customer journey helps you to scale and sustainably increase
            your sales. The focus here is on your entire sales funnel: from the
            source to the sink, from the first digital contact with potential
            customers, through lead generation to customer retention. The use of
            a customized marketing tech stack enables you to communicate with
            your customers at the right time, in the right place and with the
            right content, regardless of whether you rely on paid ads or
            organic.
          </p>
          <img src={plus} alt="plus"></img>
        </div>
        <div className="col-4" style={{ paddingTop: "40px" }}>
          <div className="marTechImg"></div>
          <h1>02</h1>

          <h4>MarTech</h4>
          <p className="lead">
            Only the right marketing tools enable the implementation of
            data-driven customer journey communication. Here we support you with
            the selection and implementation of appropriate systems and thus
            make your data usable for you. We understand the requirements of
            both the marketing and the tech side and are happy to mediate
            between the two worlds.
          </p>
          <img src={plus} alt="plus"></img>
        </div>
      </div>
    </div>
  );
}

/*
const growthMarketingImg = {
    content: "",
    width: "150px",
    height: "200px",
    backgroundSize: "150px 200px",
    position: "absolute",
    left: "-80px",
    top: "-20px",
  };
    <img
            src={plus}
            style={growthMarketingImg}
            alt="growth Marketing"
          ></img>
  const marTechImg = {
    content: "",
    width: "150px",
    height: "200px",
    backgroundSize: "150px 200px",
    position: "absolute",
    left: "-80px",
    top: "-20px",
  }; 
  <img src={marTech} style={marTechImg} alt="MarTech"></img>
*/
