import React from "react";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="d-flex">
          <a className="navbar-brand" href="#">
            Holy Frijole Chili Cook Off
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
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
            <li className="nav-item">
              <a href="#!" className="nav-link">
                <i className="fas fa-sign-in-alt"></i> Sign In
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link">
                <i className="fas fa-user-plus"></i> Create Account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
