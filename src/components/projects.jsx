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
              <h5 className="card-title">Creative Learning Portal</h5>
              {/* <p className="card-text">Project 1</p> */}
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
              <h5 className="card-title">Query Management System</h5>
              {/* <p className="card-text">Project 2</p> */}
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
              <h5 className="card-title">E-Commerce Website</h5>
              {/* <p className="card-text">Project 2</p> */}
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
              <h5 className="card-title">Drowsiness Detector</h5>
              {/* <p className="card-text">Project 2</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="project-description">
        <div
          className={`collapse ${
            openCollapse === "project1Collapse" ? "show" : ""
          }`}
          id="project1Collapse"
        >
          <div className="card card-body text-center">
            <h5 className="card-title">Drowsiness Detector</h5>
            This project is a comprehensive web portal designed to enhance the
            learning experience by providing personalized course
            recommendations. Leveraging a hybrid recommendation system, the
            platform combines collaborative filtering and content-based
            filtering to suggest courses that best fit the user's interests and
            learning history. Built with a robust backend in Python and Node.js,
            and a dynamic frontend using React.js, the portal ensures a seamless
            user experience. MongoDB serves as the database, storing user data
            and course information efficiently.
          </div>
        </div>
        <div
          className={`collapse ${
            openCollapse === "project2Collapse" ? "show" : ""
          }`}
          id="project2Collapse"
        >
          <div className="card card-body">
            PInspired by the functionality and user experience of Amazon.com,
            this e-commerce website offers a modern shopping platform. The
            application is designed with Node.js for the server-side operations
            and React.js for the client-side, ensuring a responsive and fast
            user interface. MongoDB is used to manage product inventories and
            user data, while Firebase provides real-time updates and secure
            authentication. The platform includes features such as product
            listings, user reviews, shopping carts, and secure payment gateways.
          </div>
        </div>
        <div
          className={`collapse ${
            openCollapse === "project3Collapse" ? "show" : ""
          }`}
          id="project3Collapse"
        >
          <div className="card card-body">
            This system is built to efficiently store, manage, and execute SQL
            queries. Utilizing .NET Core for backend services and PostgreSQL for
            the database, the platform offers high performance and reliability.
            The frontend, developed with React.js, provides an intuitive
            interface for users to interact with the system. Key features
            include query scheduling, result caching, and detailed query
            execution reports, making it an indispensable tool for database
            administrators and developers.
          </div>
        </div>
        <div
          className={`collapse ${
            openCollapse === "project4Collapse" ? "show" : ""
          }`}
          id="project4Collapse"
        >
          <div className="card card-body">
            This project focuses on enhancing road safety by detecting driver
            drowsiness in real-time. Using a live camera feed, the system
            employs Convolutional Neural Networks (CNNs) to analyze facial
            features and eye movements to determine signs of drowsiness. The
            application is built with Python and Flask for the backend, with
            OpenCV handling the computer vision tasks. This innovative solution
            aims to reduce accidents caused by driver fatigue by providing
            timely alerts and notifications.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
