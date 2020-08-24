import React from "react";

export default function Footer() {
  const footerStyle = {
    padding: "60px",
    backgroundColor: "#dcdcdc",
  };
  const socialMediaIcons = {
    paddingRight: "10px",
  };
  return (
    <div className="row" style={footerStyle} id="Footer">
      <div className="col-2"></div>
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
        <a
          href="https://www.linkedin.com/company/advalyze-gmbh/"
          target="_blank"
          rel="noopener noreferrer"
          style={socialMediaIcons}
        >
          <i className="fa bg-light fa-linkedin-square"></i>
        </a>

        <a
          href="https://www.instagram.com/advalyze/"
          target="_blank"
          rel="noopener noreferrer"
          style={socialMediaIcons}
        >
          <i className="fa bg-light fa-instagram"></i>
        </a>

        <a
          href="https://www.facebook.com/advalyze/"
          target="_blank"
          rel="noopener noreferrer"
          style={socialMediaIcons}
        >
          <i className="fa bg-light fa-facebook-square"></i>
        </a>

        <a
          href="https://www.xing.com/companies/advalyzegmbh/"
          target="_blank"
          rel="noopener noreferrer"
          style={socialMediaIcons}
        >
          <i className="fa bg-light fa-xing-square"></i>
        </a>
      </div>
      <div className="col-1"></div>
    </div>
  );
}
/*

*/
