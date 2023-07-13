import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = (props) => {
  const handleClick = () => {
    props.LoginState(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-danger ">
      <div className="container-fluid mx-2 ">
        <Link className="navbar-brand active text-white" to="/user">
          User
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
            className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ '--bs-scroll-height': '100px' }}
          >
            <li className="nav-item">
              <Link className="nav-link text-white" to="/bugreport">
                <i className="bi bi-bug"></i> Bug Report
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/featurereport">
                <i className="bi bi-star"></i> Feature Report
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/downloadpatch">
                <i className="bi bi-cloud-download"></i> Download Patch
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/transcations">
              <i className="bi bi-clock-history"></i> Transcation History
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
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

export default UserNavbar;
