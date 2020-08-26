import React from "react";

import "../style/navbar.css";

export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top  bg-transparent"
      id="navbarHeader"
    >
      <div className="container">
        <div>
          <a className="navbar-brand">
            <img
              src="https://www.advalyze.com/wp-content/uploads/2020/07/advalyze-logo.svg"
              href="#main"
            />
          </a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <li className="scroll menu-item menu-item-type-custom menu-item-object-custom current-menu-item active menu-item-16 nav-item">
              <a className="nav-link" href="#service">
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
    </nav>
  );
}
