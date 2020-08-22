import React from "react";

export default function Testimonial() {
  const TestStyle = {
    paddingTop: "60px",
    paddingBottom: "60px",
    backgroundColor: "#ff8ab0",
    color: "white",
  };
  return (
    <div className="container-fluid" style={TestStyle}>
      <div style={{ textAlign: "center" }}>
        <h2>
          »With passion, expertise and the best<br></br>
          Advalyze accompanies us from the first<br></br>
          Step into digitization ...
        </h2>
        <p>
          ... up to extensive measures to reach customers in the future via all
          current and digital contact <br></br>points. We really appreciate the
          knowledge transfer within the company. Thank you for the many<br></br>{" "}
          years of partnership and cooperation! «
        </p>
        <img
          src="https://www.advalyze.com/wp-content/uploads/2020/07/christian-hansen-siematic.png"
          alt="Christian Hansen"
          title="Advalyze customer SieMatic Christian Hansen"
        />
        <p>Christian Hansen, CMO SieMatic</p>
      </div>
    </div>
  );
}
