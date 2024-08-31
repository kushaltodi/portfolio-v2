import React, { useState } from "react";
import menuIcon from "../assets/svg/ham-menu.svg";
import menuCloseIcon from "../assets/svg/ham-menu-close.svg";
import profilePic from "../assets/prfile-pic.png";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu after clicking a link
  };

  return (
    <div>
      <header className="header">
        <div className="header__content">
          <div
            className="header__logo-container"
            onClick={() => (window.location.href = "/")}
          >
            <div className="header__logo-img-cont">
              <img
                src={profilePic}
                alt="Kushal Todi Logo Image"
                className="header__logo-img"
              />
            </div>
            <span className="header__logo-sub">Kushal Todi</span>
          </div>
          <div className="header__main">
            <ul className="header__links">
              <li className="header__link-wrapper">
                <a href="/" className="header__link">
                  {" "}
                  Home{" "}
                </a>
              </li>
              <li className="header__link-wrapper">
                <a href="/#about" className="header__link">
                  {" "}
                  About{" "}
                </a>
              </li>
              {/* <li className="header__link-wrapper">
                <a href="/#projects" className="header__link">
                  {" "}
                  Projects{" "}
                </a>
              </li> */}
              <li className="header__link-wrapper">
                <a href="/#contact" className="header__link">
                  {" "}
                  Contact{" "}
                </a>
              </li>
            </ul>
            <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
              <img
                src={menuIcon}
                alt="hamburger menu"
                className={`header__main-ham-menu ${
                  isMenuOpen ? "d-none" : ""
                }`}
              />
              <img
                src={menuCloseIcon}
                alt="hamburger menu close"
                className={`header__main-ham-menu-close ${
                  isMenuOpen ? "" : "d-none"
                }`}
              />
            </div>
          </div>
        </div>
        <div
          className={`header__sm-menu ${
            isMenuOpen ? "header__sm-menu--active" : ""
          }`}
        >
          <div className="header__sm-menu-content">
            <ul className="header__sm-menu-links">
              <li className="header__sm-menu-link">
                <a href="/" onClick={handleLinkClick}>
                  {" "}
                  Home{" "}
                </a>
              </li>
              <li className="header__sm-menu-link">
                <a href="/#about" onClick={handleLinkClick}>
                  {" "}
                  About{" "}
                </a>
              </li>
              {/* <li className="header__sm-menu-link">
                <a href="/#projects" onClick={handleLinkClick}> Projects </a>
              </li> */}
              <li className="header__sm-menu-link">
                <a href="/#contact" onClick={handleLinkClick}>
                  {" "}
                  Contact{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
