import React from 'react';
import { Link } from 'react-router-dom'; 

const AdminNavbar = (props) => {
  const handleClick = () => {
    props.LoginState(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-danger">
      <div className="container-fluid mx-2 ">
        <Link className="navbar-brand active text-white" to="/admin">Admin</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/patchrequest">
                <i className="bi bi-patch-check-fill me-1"></i>
                Patch Request
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/approvedpatches">
                <i className="bi bi-check2-circle me-1"></i>
                Approved Patches
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/rejectedpatches">
                <i className="bi bi-x-circle me-1"></i>
                Rejected Patch
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/deployedpatches">
                <i className="bi bi-cloud-check-fill me-1"></i>
                Deployed Patches
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/transcations">
              <i className="bi bi-clock-history"></i> Transcation History
              </Link>
            </li>
            <li className="nav-item" onClick={handleClick}>
              <Link className="nav-link text-white" to="/login">
                <i className="bi bi-box-arrow-right me-1"></i>
                Logout
              </Link>
            </li>
          </ul>
        </div> 
      </div>
    </nav>
  );
}

export default AdminNavbar;
