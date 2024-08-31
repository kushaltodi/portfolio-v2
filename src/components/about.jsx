import React from "react";

function About() {
  return (
    <div>
      <section id="about" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">About Me</span>
            <span className="heading-sec__sub">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </span>
          </h2>
          <div className="about__content">
            <div className="about__content-main">
              <h3 className="about__content-title">Get to know me!</h3>
              <div className="about__content-details">
                <p className="about__content-details-para">
                  Experienced Full-stack Software Engineer with a strong focus
                  on backend development. I architect and implement robust
                  backend solutions for web applications, ensuring seamless data
                  management and API functionality.
                </p>
                <p className="about__content-details-para">
                  Explore my portfolio to see examples of successful projects
                  showcasing backend expertise and integrations.
                </p>
                <p className="about__content-details-para">
                  Passionate about sharing insights on backend development,
                  DevOps practices (CI/CD, Docker, Kubernetes), and database
                  management through engaging content on LinkedIn and Instagram.
                </p>
                <p className="about__content-details-para">
                  Let's connect and discuss how we can collaborate on innovative
                  projects!
                </p>
              </div>
              <a
                href="./#contact"
                className="btn btn--med btn--theme dynamicBgClr"
              >
                Contact
              </a>
            </div>
            <div className="about__content-skills">
              <h3 className="about__content-title">My Skills</h3>
              <div className="skills">
                <div className="skills__skill">HTML</div>
                <div className="skills__skill">CSS</div>
                <div className="skills__skill">JavaScript</div>
                <div className="skills__skill">React</div>
                <div className="skills__skill">.NET</div>
                <div className="skills__skill">Java</div>
                <div className="skills__skill">Python</div>
                <div className="skills__skill">NodeJS</div>
                <div className="skills__skill">SQL</div>
                <div className="skills__skill">PostreSQL</div>
                <div className="skills__skill">MonoDB</div>
                <div className="skills__skill">GIT</div>
                <div className="skills__skill">Github</div>
                <div className="skills__skill">Docker</div>
                <div className="skills__skill">Kerbernetes</div>
                <div className="skills__skill">Helm</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
