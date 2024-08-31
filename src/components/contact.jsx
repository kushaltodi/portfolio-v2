import React from "react";

function Contact() {
  return (
    <div className="contact-body" id="contact">
      <div className="d-flex flex-row justify-content-center p-5 pb-4 fs-1 fw-bold ">
        CONTACT
      </div>
      <div className="heading-underline"></div>
      <div className="d-flex flex-row justify-content-center">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </div>
      <div className="contact-form-body">
        <form className="contact-form">
          <div className="mb-3">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="inputName" />
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail" />
          </div>
          <div className="mb-3">
            <label htmlFor="inputMessage" className="form-label">
              Message
            </label>
            <textarea
              placeholder="Enter Your Message"
              style={{ resize: "none", backgroundColor: "#e6e3e3" }}
              type="text"
              className="form-control"
              id="inputMessage"
              rows={7}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
