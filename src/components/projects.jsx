import { useState } from "react";

function Projects() {
  const [openCollapse, setOpenCollapse] = useState(null);

  const handleCollapseToggle = (collapseId) => {
    if (openCollapse === collapseId) {
      setOpenCollapse(null); // If clicked collapse is already open, close it
    } else {
      setOpenCollapse(collapseId); // Open the clicked collapse
    }
  };

  return (
    <div className="projects-body">
      <div className="d-flex flex-row justify-content-center p-5 pb-4 fs-1 fw-bold">
        PROJECTS
      </div>
      <div className="heading-underline"></div>
      <div className="d-flex flex-row justify-content-center">
        Here you will find more information about me, what I do, and are my
        current project.
      </div>
      <div className=" m-5">
        <div className="d-inline-flex gap-1 m-3">
          <div
            className="card"
            onClick={() => handleCollapseToggle("project1Collapse")}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">Project 1</p>
            </div>
          </div>
        </div>
        <div className="d-inline-flex gap-1 m-3">
          <div
            className="card"
            onClick={() => handleCollapseToggle("project2Collapse")}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">Project 2</p>
            </div>
          </div>
        </div>
        <div className="d-inline-flex gap-1 m-3">
          <div
            className="card"
            onClick={() => handleCollapseToggle("project3Collapse")}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">Project 2</p>
            </div>
          </div>
        </div>
        <div className="d-inline-flex gap-1 m-3">
          <div
            className="card"
            onClick={() => handleCollapseToggle("project4Collapse")}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">Project 2</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`collapse ${
          openCollapse === "project1Collapse" ? "show" : ""
        }`}
        id="project1Collapse"
      >
        <div className="card card-body">
          Project 1 : Some placeholder content for the collapse component. This
          panel is hidden by default but revealed when the user activates the
          relevant trigger.
        </div>
      </div>
      <div
        className={`collapse ${
          openCollapse === "project2Collapse" ? "show" : ""
        }`}
        id="project2Collapse"
      >
        <div className="card card-body">
          Project 2 : Some placeholder content for the collapse component. This
          panel is hidden by default but revealed when the user activates the
          relevant trigger.
        </div>
      </div>
      <div
        className={`collapse ${
          openCollapse === "project3Collapse" ? "show" : ""
        }`}
        id="project3Collapse"
      >
        <div className="card card-body">
          Project 3 : Some placeholder content for the collapse component. This
          panel is hidden by default but revealed when the user activates the
          relevant trigger.
        </div>
      </div>
      <div
        className={`collapse ${
          openCollapse === "project4Collapse" ? "show" : ""
        }`}
        id="project4Collapse"
      >
        <div className="card card-body">
          Project 4 : Some placeholder content for the collapse component. This
          panel is hidden by default but revealed when the user activates the
          relevant trigger.
        </div>
      </div>
    </div>
  );
}

export default Projects;
