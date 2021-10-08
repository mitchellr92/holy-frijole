import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const authNav = (
  <div className="container-fluid">
    <div className="d-flex">
      <Fragment>
        <Link
          to="/"
          className="h3 text-white me-3"
          style={{ textDecoration: "none" }}
        >
          HFCCO
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/gallery" className="nav-link active" aria-current="page">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="rules">
              Rules
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="bulletin">
              Hot Chili Bulletin
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="register">
              Register
            </Link>
          </li>
        </ul>
      </Fragment>
    </div>
    <div className="d-flex">
      <ul className="navbar-nav">
        <Fragment>
          <li>
            <Link to="/register" className="nav-link">
              <i className="fas fa-user-plus"></i> Create Account
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              <i className="fas fa-sign-in-alt"></i> Login
            </Link>
          </li>
        </Fragment>
      </ul>
    </div>
  </div>
);

const guestNav = (
  <div className="container-fluid">
    <div className="d-flex">
      <Link
        to="/"
        className="h3 text-white me-3"
        style={{ textDecoration: "none" }}
      >
        HFCCO
      </Link>
      <ul className="navbar-nav">
        <Fragment>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link active" aria-current="page">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/rules">
              Rules
            </Link>
          </li>
        </Fragment>
      </ul>
    </div>
    <div className="d-flex">
      <ul className="navbar-nav">
        <Fragment>
          <li>
            <Link to="/register" className="nav-link">
              <i className="fas fa-user-plus"></i> Create Account
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              <i className="fas fa-sign-in-alt"></i> Login
            </Link>
          </li>
        </Fragment>
      </ul>
    </div>
  </div>
);

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-5">
      {guestNav}
    </nav>
  );
};

export default Navbar;
