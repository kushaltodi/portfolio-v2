import React from "react";
import linkedinIcon from "../assets/png/linkedin-ico.png";
import githubIcon from "../assets/png/github-ico.png";
import instaIcon from "../assets/svg/insta-ico.svg";
import youtubeIcon from "../assets/png/yt-ico.png";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div>
      <footer className="main-footer">
        <div className="main-container">
          <div className="main-footer__upper">
            <div className="main-footer__row main-footer__row-1">
              <h2 className="heading heading-sm main-footer__heading-sm">
                <span>Social</span>
              </h2>
              <div className="main-footer__social-cont">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://linkedin.com/in/kushaltodi"
                >
                  <img
                    className="main-footer__icon"
                    src={linkedinIcon}
                    alt="Kushal Todi's Linkedin Profile"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/kushaltodi"
                >
                  <img
                    className="main-footer__icon"
                    src={githubIcon}
                    alt="Kushal Todi's Github Profile"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/_kushal_todi_/"
                >
                  <img
                    className="main-footer__icon"
                    src={instaIcon}
                    alt="Kushal Todi's Instagram Profile"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/@kushaltodi4939"
                >
                  <img
                    className="main-footer__icon main-footer__icon--mr-none"
                    src={youtubeIcon}
                    alt="Kushal Todi's Youtube Channel"
                  />
                </a>
              </div>
            </div>
            <div className="main-footer__row main-footer__row-2">
              <h2 className="heading heading-sm text-lt">Kushal Todi</h2>
              <p className="main-footer__short-desc">
                A Full-stack Software Engineer proficient in building robust
                applications with expertise in backend development, frontend
                design, and DevOps methodologies.
              </p>
            </div>
          </div>

          <div className="main-footer__lower">
            &copy; Copyright {date}. Made by
            <a rel="noreferrer" target="_blank" href="https://kushaltodi.me">
              Kushal Todi
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
