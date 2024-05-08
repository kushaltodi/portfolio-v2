import React from "react";

function About() {
  return (
    <div className="about-body">
      <div className="d-flex flex-row justify-content-center p-5 pb-4 fs-1 fw-bold">
        ABOUT ME
      </div>
      <div className="heading-underline"></div>
      <div className="d-flex flex-row justify-content-center">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </div>
      <div className="row about-content">
        <div className="col">
          <div className="d-flex flex-column">
            <div className="fs-4 fw-bold">Get to know me!</div>
            <div className="mt-3 fs-5">
              Experienced Full-stack Software Engineer with a strong focus on
              backend development. I architect and implement robust backend
              solutions for web applications, ensuring seamless data management
              and API functionality.
            </div>
            <div className="mt-3 fs-5">
              Explore my portfolio to see examples of successful projects
              showcasing backend expertise and integrations.
            </div>
            <div className="mt-3 fs-5">
              Passionate about sharing insights on backend development, DevOps
              practices (CI/CD, Docker, Kubernetes), and database management
              through engaging content on LinkedIn and Instagram.
            </div>
            <div className="mt-3 fs-5">
              Let's connect and discuss how we can collaborate on innovative
              projects!
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex flex-column ms-5 ps-5">
            <div className="fs-4 fw-bold">My Skills</div>
            <div className="mt-3">
              <span className="badge text-bg-light fs-6 p-3 me-3">HTML</span>
              <span className="badge text-bg-light fs-6 p-3 me-3">CSS</span>
              <span className="badge text-bg-light fs-6 p-3 me-3">JavaScript</span>
              <span className="badge text-bg-light fs-6 p-3 me-3">React</span>
            </div>
            <div className="mt-3">
              <span className="badge text-bg-light fs-6 p-3 me-3">
                Responsive Design
              </span>
              <span className="badge text-bg-light fs-6 p-3 me-3">SEO</span>
            </div>
            <div className="mt-3">
              <span className="badge text-bg-light fs-6 p-3 me-3">DOTNET</span>
              <span className="badge text-bg-light fs-6 p-3 me-3">JAVA</span>
              <span className="badge text-bg-light fs-6 p-3 me-3">Python</span>
              <span className="badge text-bg-light fs-6 p-3 me-3">C</span>
              <span className="badge text-bg-light fs-6 p-3 me-3">Node JS</span>
            </div>
            <div className="mt-3">
              <span className="badge text-bg-light fs-6 p-3 me-3">SQL</span>
              <span className="badge text-bg-light fs-6 p-3 me-3">
                Postgres SQL
              </span>
              <span className="badge text-bg-light fs-6 p-3 me-3">Mongo DB</span>
            </div>
            <div className="mt-3">
              <span className="badge text-bg-light fs-6 p-3 me-3">GIT</span>
              <span className="badge text-bg-light fs-6 p-3 me-3">GitHub</span>
            </div>
            <div className="mt-3">
              <span className="badge text-bg-light fs-6 p-3 me-3">Docker</span>
              <span className="badge text-bg-light fs-6 p-3 me-3">Kubernetes</span>
              <span className="badge text-bg-light fs-6 p-3 me-3">Helm Charts</span>
              <span className="badge text-bg-light fs-6 p-3 me-3">CI CD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
