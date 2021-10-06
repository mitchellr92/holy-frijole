import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const onClick = () => {
  console.log("button was clicked");
};

const guestLinks = (
  <Fragment>
    <li>
      <Link to="/register" className="nav-link">
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

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="d-flex">
          <div className="navbar-brand">
            Holy Frijole Chili Cook Off
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <a href="#!" className="nav-link" onClick={onClick}>
                <i className="fas fa-sign-in-alt"></i> Sign In
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link" onClick={onClick}>
                <i className="fas fa-user-plus"></i> Create Account
              </a>
            </li> */}
            {guestLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
