import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href="#!" className="navbar-brand">
            Holy Frijole Chili Cook Off
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Page 1</a>
          </li>
          <li>
            <a href="#">Page 2</a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#">
              <i className="fas fa-user-plus"></i> Create Account
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-sign-in-alt"></i> Sign In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
