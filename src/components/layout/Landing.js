import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";

const Landing = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;

  const authLinks = (
    <div className="d-flex flex-column">
      <Link to="/login">
        <button className="btn btn-danger w-25 mb-3">Login</button>
      </Link>
      <Link to="/register">
        <button className="btn btn-danger w-25">Create Account</button>
      </Link>
    </div>
  );
  return (
    <div>
      <h2 className="d-flex justify-content-center">
        Welcome to the Holy Frijole Chili Cook Off!
      </h2>
      {isAuthenticated ? "" : authLinks}
    </div>
  );
};

export default Landing;
