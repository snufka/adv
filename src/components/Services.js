import React from "react";
import plus from "../img/plus.JPG";

import servicesStyle from "../style/ServStyle.css";

export default function Services() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#f8f8f8", justifyContent: "center" }}
      id="Services"
    >
      <div
        className="row"
        style={{
          justifyContent: "center",
          paddingTop: "60px ",

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
      <div
        className="row"
        style={{ justifyContent: "center", paddingBottom: "60px" }}
      >
        <div className="col-4">
          <div className="growthMarketingImg"></div>
          <h1 className="display-4">01</h1>

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
          <div className="plusBtn">
            <img
              src="https://www.advalyze.com/wp-content/uploads/2020/07/more.svg"
              alt="plus"
            ></img>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-4" style={{ paddingTop: "40px" }}>
          <div className="marTechImg"></div>
          <h1 className="display-4">02</h1>

          <h4>MarTech</h4>
          <p className="lead">
            Only the right marketing tools enable the implementation of
            data-driven customer journey communication. Here we support you with
            the selection and implementation of appropriate systems and thus
            make your data usable for you. We understand the requirements of
            both the marketing and the tech side and are happy to mediate
            between the two worlds.
          </p>
          <div className="plusBtn">
            <img
              src="https://www.advalyze.com/wp-content/uploads/2020/07/more.svg"
              alt="plus"
            ></img>
          </div>
        </div>
      </div>
      <div className="growthMarketingOnclick">
        <div className="row justify-content-md-center">
          <div className="col-3">
            <h4>Growth Strategy</h4>
            <p>
              We are your internet entrepreneur for rent. With the right growth
              mindset, we understand brand and performance. We combine digital
              brand management with digital marketing and know your economic and
              technical challenges. Together we will develop your individual
              growth strategy.
            </p>
          </div>
          <div className="col-3">
            <h4>Funnel optimization</h4>
            <p>
              With our lean startup method, we analyze your sales funnel from
              qualified lead to conversion. Data-driven, we identify all
              relevant steps along your B2B or B2C sales funnel in order to
              continuously optimize it and significantly increase your
              conversion rate.
            </p>
          </div>
          <div className="col-3">
            <h4>Customer journey marketing</h4>
            <p>
              The right message at the right time in the right place. From
              performance to content marketing to TV, we design an integral and
              optimized customer experience from the first touchpoint to
              conversion. With high-quality traffic, we create relevant insights
              and increase the growth of your company.
            </p>
          </div>
        </div>
      </div>
      <div className="marTechOnclick">
        <div className="row justify-content-md-center">
          <div className="close-overlay"></div>
          <div className="col-3">
            <h4>Your Marketing Tools</h4>
            <p>
              DSP, DMP, CDP and CRM is not a verse from the song “MFG” of the
              fantastic four, but technologies from Marketing Technik Stacks
              that we have already set up. We'll help you build your Marketing
              Tech Stack. We are not “in love with tools”, but always start from
              your use cases and work together to develop the requirements for
              an optimal solution. Only then do we evaluate the tools with which
              you can achieve your goals lean and cost-effectively.
            </p>
          </div>
          <div className="col-3">
            <h4>Use your data</h4>
            <p>
              So that we can rely on our data-driven decisions, we are experts
              in GDPR-compliant web & app tracking, reporting of current KPIs
              and ad hoc analyzes. However, it is much more effective to
              actively use the data for marketing. Smart remarketing audiences,
              sales-driving CRM segmentation and data-driven personalization
              make the difference in your marketing.
            </p>
          </div>
          <div className="col-3">
            <h4>Marketing Development</h4>
            <p>
              We are passionate about developing conversion-optimized landing
              pages as well as communicative chatbots and we are passionate
              about configuring marketing automation flows. We connect the
              various marketing tools via API connections so that the data can
              flow between the systems. And sometimes we just make a WordPress
              site.
            </p>
          </div>
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
