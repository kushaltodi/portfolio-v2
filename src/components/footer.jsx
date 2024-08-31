import React from "react";

function Footer() {
  return (
    <div className="footer-body">
      <div className="container p-5">
        <div className="row">
          <div className="col-8">
            <div className="fw-bold fs-4 mt-4">KUSHAL TODI</div>
            <div className="footer-description">
              A Full-stack Software Engineer proficient in building robust
              applications with expertise in backend development, frontend
              design, and DevOps methodologies including CI/CD, Docker, and
              Kubernetes.
            </div>
          </div>
          <div className="col-4 text-center">
            <div className="fw-bold fs-4 mt-4">SOCIALS</div>
            <div>
              <a
                className="fa-brands fa-linkedin-in p-3 text-decoration-none"
                href="https://www.linkedin.com/in/kushaltodi/"
              ></a>
              <a
                className="fa-brands fa-github p-3 text-decoration-none"
                href=""
              ></a>
              <a className="fa-brands fa-instagram p-3 text-decoration-none"></a>
              <a className="fa-regular fa-envelope p-3 text-decoration-none"></a>
              <a className="fa-solid fa-file p-3 text-decoration-none"></a>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer-hr" />
      <div className="d-flex justify-content-center mt-5">
        © Copyright 2024 . Made by Kushal Todi
      </div>
    </div>
  );
}

export default Footer;
