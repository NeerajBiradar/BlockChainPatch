import React from 'react';
import { Link } from 'react-router-dom';

const LabelNavbar = (props) => {
  const handleClick = () => {
    props.LoginState(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-danger">
      <div className="container-fluid mx-2">
        <Link className="navbar-brand active text-white" to="/labeller">
          Labeller
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
              <Link className="nav-link text-white" to="/buglabel">
                <i className="bi bi-bug"></i> Bug Priority
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/featurelabel">
                <i className="bi bi-star"></i> Feature Priority
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/transcations">
              <i className="bi bi-clock-history"></i> Transcation History
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

export default LabelNavbar;
