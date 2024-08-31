import React from "react";
import headPic from "../assets/head-pic.jpg";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <div
          className="navbar-brand fw-bold d-flex flex-row justify-content-center align-items-center"
          href="#"
        >
          <img className="head-pic" src={headPic}></img>
          <span className="nav-name ms-2">Kushal Todi</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-5">
              <a
                className="nav-link active  fw-bold"
                aria-current="page"
                href="#home"
              >
                HOME
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link active  fw-bold" href="#about">
                ABOUT
              </a>
            </li>
            {/* <li className="nav-item me-5">
                <a className="nav-link active  fw-bold" href="#">
                  PROJECTS
                </a>
              </li> */}
            <li className="nav-item me-5">
              <a className="nav-link active  fw-bold" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
