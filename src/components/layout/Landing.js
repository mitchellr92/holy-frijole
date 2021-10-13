import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
import Carousel from "./Carousel";

const Landing = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;

  const authLinks = (
    <div className="d-flex flex-column w-100 p-5">
      <Link className="w-50 mx-auto" to="/login">
        <button className="btn btn-primary w-100 mb-3">Login</button>
      </Link>
      <Link className="w-50 mx-auto" to="/register">
        <button className="btn btn-primary w-100">Create Account</button>
      </Link>
    </div>
  );

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Carousel />
      <div className="landing d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-white">
          Welcome to the Holy Frijole Chili Cook Off!
        </h1>
        {isAuthenticated ? "" : authLinks}
      </div>
    </div>
  );
};

export default Landing;
