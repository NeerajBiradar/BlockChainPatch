import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

const DeveloperNavbar= (props) => {
  const handleClick = () => {
    props.LoginState(false)
    //console.log('HII')
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand active" to="/Developer">Patch Managment</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
            <li className="nav-item">
              <Link className="nav-link"  to="/UploadPatch">Upload Patch</Link>
            </li>
            <li className="nav-item" onClick={handleClick}>
              <Link className="nav-link" to="/Login">Logout</Link>
            </li>
            
            
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default DeveloperNavbar;
