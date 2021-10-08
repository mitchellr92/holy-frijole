import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Countdown from "../utils/Countdown";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-5">
      <div className="container-fluid">
        <div className="d-flex">
          <Fragment>
            <Link
              to="/"
              className="text-dark me-4"
              style={{ textDecoration: "none" }}
            >
              <h5>Holy Frijole</h5>
              <h5>Chili Cook Off</h5>
            </Link>
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item">
                <Link
                  to="/gallery"
                  className="fw-bold me-3 text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="fw-bold me-3 text-dark"
                  to="/recipes"
                  style={{ textDecoration: "none" }}
                >
                  Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="fw-bold me-3 text-dark"
                  to="/bulletin"
                  style={{ textDecoration: "none" }}
                >
                  Hot Chili Bulletin
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="fw-bold me-3 text-dark"
                  to="/rules"
                  style={{ textDecoration: "none" }}
                >
                  Rules
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="fw-bold me-3 text-dark"
                  to="/signup"
                  style={{ textDecoration: "none" }}
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="fw-bold me-3 text-dark"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fas fa-sign-in-alt"></i> Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="fw-bold me-3 text-dark"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fas fa-user-plus"></i> Create Account
                </Link>
              </li>
            </ul>
          </Fragment>
        </div>
        <div>
          <Countdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;