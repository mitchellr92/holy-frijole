import React from "react";
import { Link } from "react-router-dom";
import Countdown from "../utils/Countdown";

const Landing = () => {
  return (
    <div>
      <h2 className="d-flex justify-content-center">
        Welcome to the Holy Frijole Chili Cook Off!
      </h2>
      <div className="d-flex flex-column">
        <Link to="/login">
          <button className="btn btn-danger w-25 mb-3">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn btn-danger w-25">Create Account</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
