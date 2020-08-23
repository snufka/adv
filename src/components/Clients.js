import React from "react";

export default function clients() {
  const clientLogo = {
    maxidth: "150px",
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>A selection of our customers:</h1>
      </div>
      <br></br>
      <div className="row">
        <div className="col-3">
          <img
            className={clientLogo}
            src="https://www.advalyze.com/wp-content/uploads/2020/07/client-daimler.svg"
            alt="Daimler logo"
          ></img>
        </div>
        <div className="col-3">
          <img
            className={clientLogo}
            src="https://www.advalyze.com/wp-content/uploads/2020/07/client-ancestry.svg"
            alt="ancestry"
          ></img>
        </div>
        <div className="col-3">
          <img
            style={{ width: "100px" }}
            src="https://www.advalyze.com/wp-content/uploads/2020/07/client-siematic.svg"
            alt="SieMatic"
          ></img>
        </div>
        <div className="col-3">
          <img
            style={{ width: "70px" }}
            src="https://www.advalyze.com/wp-content/uploads/2020/07/client-ey.svg"
            alt="ey logo"
          ></img>
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col-3">
          <img
            style={{ width: "170px" }}
            src="https://www.advalyze.com/wp-content/uploads/2020/07/client-fashion-id.png"
            alt="Fashion id"
          ></img>
        </div>
        <div className="col-3">
          <img
            style={{ maxWidth: "150px" }}
            src="https://www.advalyze.com/wp-content/uploads/2020/07/client-jimdo.png"
            alt="jimbo"
          ></img>
        </div>
        <div className="col-3">
          <img
            className={clientLogo}
            src="https://www.advalyze.com/wp-content/uploads/2020/07/client-innogy.svg"
            alt="SieMatic"
          ></img>
        </div>
        <div className="col-3">
          <img
            className={clientLogo}
            src="https://www.advalyze.com/wp-content/uploads/2020/07/client-outfittery.svg"
            alt="ey logo"
          ></img>
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col-3">
          <img
            style={{ maxWidth: "150px" }}
            src="https://www.advalyze.com/wp-content/uploads/2020/07/client-mobile-de.png"
            alt="mobile"
          ></img>
        </div>
        <div className="col-3">
          <img
            style={{ maxWidth: "150px" }}
            src="https://www.advalyze.com/wp-content/uploads/2020/07/client-stubhub.svg"
            alt="stubhub"
          ></img>
        </div>
        <div className="col-3">
          <img
            style={{ maxWidth: "150px" }}
            src="https://www.advalyze.com/wp-content/uploads/2020/07/client-doozer.png"
            alt="doozer"
          ></img>
        </div>
        <div className="col-3">
          <button className="btn btn-primary" style={clientLogo}>
            And you
          </button>
        </div>
      </div>
    </div>
  );
}
