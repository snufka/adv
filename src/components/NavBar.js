import React from "react";

export default function NavBar() {
  return (
    <div
      className="row"
      style={{ display: "inline-flex", paddingTop: "30px" }}
      id="NavBar"
    >
      <div>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="#service">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#project">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://advalyze-jobs.personio.de/">
              Jobs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
