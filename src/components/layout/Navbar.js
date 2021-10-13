import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
import Countdown from "../utils/Countdown";

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li className="fw-bold me-3 text-dark">Hello {user && user.name}</li>
      <li>
        <a
          onClick={onLogout}
          href="#!"
          className="fw-bold me-3 text-dark navbar-link"
          style={{ textDecoration: "none" }}
        >
          <i className="fas fa-sign-out-alt"></i> <span>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link
          to="/login"
          className="fw-bold mb-2 text-dark navbar-link"
          style={{ textDecoration: "none" }}
        >
          <i className="fas fa-sign-in-alt"></i> Login
        </Link>
      </li>
      <li>
        <Link
          to="/register"
          className="fw-bold mb-2 text-dark navbar-link"
          style={{ textDecoration: "none" }}
        >
          <i className="fas fa-user-plus"></i> Create Account
        </Link>
      </li>
    </Fragment>
  );

  const smNav = (
    <div className="p-3">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-white">
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <Link
                to="/gallery"
                className="fw-bold m-2 text-dark navbar-link"
                style={{ textDecoration: "none" }}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="fw-bold m-2 text-dark navbar-link"
                to="/recipes"
                style={{ textDecoration: "none" }}
              >
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="fw-bold m-2 text-dark navbar-link"
                to="/bulletin"
                style={{ textDecoration: "none" }}
              >
                Hot Chili Bulletin
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="fw-bold m-2 text-dark navbar-link"
                to="/rules"
                style={{ textDecoration: "none" }}
              >
                Rules
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="fw-bold m-2 text-dark navbar-link"
                to="/signup"
                style={{ textDecoration: "none" }}
              >
                Register
              </Link>
            </li>
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </div>
      <nav className="navbar">
        <div className="container-fluid p-0">
          <button
            className="navbar-toggler d-flex align-items-center"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <h5 className="mb-0 me-4">Holy Frijole Chili Cook Off</h5>
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    </div>
  );

  const lgNav = (
    <nav className="navbar navbar-expand-lg navbar-collapse-lg navbar-light bg-white px-lg-5 sticky-top">
      <div className="container-fluid">
        <div className="d-flex flex-column flex-xxl-row">
          <Fragment>
            <Link
              to="/"
              className="text-dark me-4 d-flex flex-xxl-column"
              style={{ textDecoration: "none" }}
            >
              <h5>Holy Frijole</h5>
              <h5>Chili Cook Off</h5>
            </Link>
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item">
                <Link
                  to="/gallery"
                  className="fw-bold me-3 text-dark navbar-link"
                  style={{ textDecoration: "none" }}
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="fw-bold me-3 text-dark navbar-link"
                  to="/recipes"
                  style={{ textDecoration: "none" }}
                >
                  Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="fw-bold me-3 text-dark navbar-link"
                  to="/bulletin"
                  style={{ textDecoration: "none" }}
                >
                  Hot Chili Bulletin
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="fw-bold me-3 text-dark navbar-link"
                  to="/rules"
                  style={{ textDecoration: "none" }}
                >
                  Rules
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="fw-bold me-3 text-dark navbar-link"
                  to="/signup"
                  style={{ textDecoration: "none" }}
                >
                  Register
                </Link>
              </li>
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </Fragment>
        </div>
        <div>
          <Countdown />
        </div>
      </div>
    </nav>
  );

  return (
    <div>
      {/* <div>{lgNav}</div> */}
      <div>{smNav}</div>
    </div>
  );
};

export default Navbar;
