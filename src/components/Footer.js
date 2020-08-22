import React from "react";

export default function Footer() {
  const footerStyle = {
    padding: "40px",
  };
  return (
    <div className="row" style={footerStyle}>
      <div></div>
      <div className="col-2">
        <p>
          <strong>advalyze GmbH</strong>
        </p>
        <p>Berliner Allee 26</p>
        <p>13088 Berlin</p>
      </div>
      <div className="col-2">
        <p>
          <strong>Contact</strong>
        </p>
        <a href="mailto:ello@advalyze.de">hello@advalyze.de</a>
        <br></br>
        <a href="tel:+49 305546 3736">+49 305546 3736</a>
      </div>
      <div className="col-2">
        <p>
          <strong>information</strong>
        </p>
        <a
          href="https://advalyze-jobs.personio.de/"
          title="Jobs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jobs
        </a>
        <br></br>
        <a
          href="https://www.advalyze.com/de/datenschutz/"
          title="Data protection"
        >
          Privacy
        </a>
        <br></br>
        <a href="https://www.advalyze.com/de/impressum/" title="imprint">
          Policy Imprint
        </a>
        <br></br>
        <a href="#" title="Cookie settings" class="borlabs-cookie-preference">
          Cookie Settings
        </a>
      </div>

      <div className="col-2">
        <p>
          <strong>advalyze GmbH</strong>
        </p>
        <p>Berliner Allee 26</p>
        <p>13088 Berlin</p>
      </div>
    </div>
  );
}
/*

*/
