import React from "react";

export default function NavBar() {
  return (
    <div style={{ textAlign: "center" }}>
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
          <a
            className="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
