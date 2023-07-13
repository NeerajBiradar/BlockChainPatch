import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-danger">
      <div className="container-fluid">
        <Link className="navbar-brand active text-white" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll mx-2"
            style={{ '--bs-scroll-height': '100px' }}
          >
            <li className="nav-item">
              <Link className="nav-link text-white" to="/AboutUs">
                <i className="bi bi-info-circle"></i> About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/ContactUs">
                <i className="bi bi-envelope"></i> Contact us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Signup">
              <i className="bi bi-box-arrow-in-right"></i> Signup
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link text-white" to="/Login">
              <i className="bi bi-door-open"></i> Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
