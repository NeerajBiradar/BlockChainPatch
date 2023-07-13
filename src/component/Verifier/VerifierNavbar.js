import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

const VerifierNavbar = (props) => {
  const handleClick = () => {
    props.LoginState(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-danger">
      <div className="container-fluid">
        <Link className="navbar-brand active text-white" to="/verifier">
          Patch Management
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
          <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/verifypatch">
                <i className="bi bi-check-square-fill"></i> Verify Patch
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/transcations">
                <i className="bi bi-clock-history"></i> Transaction History
              </Link>
            </li>
            <li className="nav-item" onClick={handleClick}>
              <Link className="nav-link text-white" to="/login">
                <i className="bi bi-box-arrow-right"></i> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default VerifierNavbar;
