import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const AdminNavbar = (props) => {

  const handleClick = () => {
    props.LoginState(false)
    //console.log('HII')
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand active" to="/Admin">Admin</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>   
            <li className="nav-item">
              <Link className="nav-link" to="/PatchRequest">Patch Request</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ApprovedPatches">Approved Patches</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/RejectedPatches">Rejected Patch</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/DeployedPatches">Deployed Patches</Link>
            </li>
            <li className="nav-item" onClick={handleClick}>
              <Link className="nav-link" to="/Login">Logout</Link>
            </li>
          </ul>
        </div> 
      </div>
    </nav>
  );
}

export default AdminNavbar;
