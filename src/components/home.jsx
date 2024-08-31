import React from "react";
import linkedinIcon from "../assets/svg/linkedin-dark.svg";
import githubIcon from "../assets/svg/github-dark.svg";
import instaIcon from "../assets/svg/insta-dark.svg";
import ytIcon from "../assets/svg/yt-dark.svg";

function Home() {
  return (
    <div>
      {" "}
      <section className="home-hero">
        <div className="home-hero__content">
          <h1 className="heading-primary">Hey, I'm Kushal Todi</h1>
          <div className="home-hero__info">
            <p className="text-primary">
              A Full-stack Software Engineer proficient in building robust
              applications with expertise in backend development, frontend
              design, and DevOps methodologies.
            </p>
          </div>
          <div className="home-hero__cta">
            <a href="./#about" className="btn btn--bg">
              About
            </a>
          </div>
        </div>
        <div className="home-hero__socials">
          <div className="home-hero__social">
            <a
              href="https://linkedin.com/in/kushaltodi"
              className="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={linkedinIcon}
                alt="Kushal Todi Linkedin Profile"
                className="home-hero__social-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a
              href="https://github.com/kushaltodi"
              className="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={githubIcon}
                alt="Kushal Todi Github Profile"
                className="home-hero__social-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a
              href="https://www.instagram.com/_kushal_todi_/"
              className="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={instaIcon}
                alt="Kushal Todi Instagram Profile"
                className="home-hero__social-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a
              href="https://www.youtube.com/@kushaltodi4939"
              className="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={ytIcon}
                alt="Kushal Todi Youtube Channel"
                className="home-hero__social-icon"
              />
            </a>
          </div>
        </div>
        <div className="home-hero__mouse-scroll-cont">
          <div className="mouse"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
