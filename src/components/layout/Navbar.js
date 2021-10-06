import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const guestLinks = (
  <Fragment>
    <li>
      <Link to="/signup" className="nav-link">
        <i className="fas fa-user-plus"></i> Create Account
      </Link>
    </li>
    <li>
      <Link to="/login" className="nav-link">
        <i className="fas fa-sign-in-alt"></i> Sign In
      </Link>
    </li>
  </Fragment>
);

const guestLinks2 = (
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
);

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="d-flex">
          <Link to="/" className="navbar-brand">
            HFCCO
          </Link>
          <ul className="navbar-nav">
            {/* <li className="nav-item">
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
            </li> */}
            {guestLinks2}
          </ul>
        </div>
        <div className="d-flex">
          <ul className="navbar-nav">{guestLinks}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
