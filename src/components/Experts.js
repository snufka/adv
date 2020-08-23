import React from "react";
import Carousel from "./Carousel";

export default function Experts() {
  return (
    <div className="padding">
      <div style={{ textAlign: "center" }}>
        <h1>
          Over 25 experts for your digital<br></br> success.
        </h1>
        <p className="lead">
          We always see ourselves as part of our customers' team and go the
          extra mile together. With passion and passion<br></br> for
          entrepreneurship, innovation and digital marketing, together we will
          reach the next
          <br></br> digital level of your projects.
        </p>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div class="col-6">
          <img
            src="https://www.advalyze.com/wp-content/uploads/2020/07/office-02.jpg"
            alt="founders"
            style={{ maxWidth: "100%", height: "auto", marginLeft: "40px" }}
          ></img>
          <Carousel />
          <img
            src="https://www.advalyze.com/wp-content/uploads/2020/07/office-01.jpg"
            alt="office2"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div class="col-5" style={{ marginTop: "70px" }}>
          <img
            src="https://www.advalyze.com/wp-content/uploads/2020/07/office-03.jpg"
            alt="office"
            style={{ maxWidth: "100%", height: "auto" }}
          ></img>
        </div>
      </div>
    </div>
  );
}
