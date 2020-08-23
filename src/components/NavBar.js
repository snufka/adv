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
            <a className="nav-link active" href="#">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Jobs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
