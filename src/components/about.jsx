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
                  Full-stack Software Engineer with a passion for architecting
                  resilient backend systems and driving intelligent automation
                  at scale. I design and implement distributed, event-driven
                  architectures that ensure seamless data orchestration, robust
                  API ecosystems, and high system reliability across
                  cloud-native environments.
                </p>
                <p className="about__content-details-para">
                  With hands-on experience in DevOps workflows — including CI/CD
                  pipelines, containerization, and orchestration — I bring
                  operational excellence to every deployment.
                </p>
                <p className="about__content-details-para">
                  Beyond the code, I actively share technical insights and
                  real-world engineering experiences around backend development,
                  infrastructure as code, and scalable systems on LinkedIn and
                  Instagram.
                </p>
                <p className="about__content-details-para">
                  Let’s connect to build secure, scalable, and AI-augmented
                  solutions for the future.
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
                <div className="skills__skill">System Design</div>
                <div className="skills__skill">Microservices</div>
                <div className="skills__skill">REST</div>
                <div className="skills__skill">Automation</div>
                <div className="skills__skill">Responsive UI</div>
                <div className="skills__skill">AI Agents</div>
                <div className="skills__skill">Containerization</div>
                <div className="skills__skill">Orchestration</div>
                <div className="skills__skill">RAG</div>
                <div className="skills__skill">Vector Databases</div>
                <div className="skills__skill">Python</div>
                <div className="skills__skill">.NET</div>
                <div className="skills__skill">NodeJS</div>
                <div className="skills__skill">Java</div>
                <div className="skills__skill">SQL</div>
                <div className="skills__skill">PostreSQL</div>
                <div className="skills__skill">MonoDB</div>
                <div className="skills__skill">HTML</div>
                <div className="skills__skill">CSS</div>
                <div className="skills__skill">JavaScript</div>
                <div className="skills__skill">React</div>
                <div className="skills__skill">GIT</div>
                <div className="skills__skill">Github</div>
                <div className="skills__skill">Docker</div>
                <div className="skills__skill">Kubernetes</div>
                <div className="skills__skill">Helm</div>
                <div className="skills__skill">Grafana</div>
                <div className="skills__skill">Agile</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
