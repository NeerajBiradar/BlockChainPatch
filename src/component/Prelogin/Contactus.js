import React from "react";

const Contactus = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-6">
          <img src="./Images/contactus.jpg" alt="Contact Us" className="img-fluid mt-5" />
        </div>
        <div className="col-md-6">
          <form className="mt-5">
            <div className="form-group py-3">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group py-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group py-3">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group py-3">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
