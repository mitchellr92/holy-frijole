import React from "react";
import { Link } from "react-router-dom";
import Countdown from "../utils/Countdown";

const Landing = () => {
  return (
    <div>
      <h2 className="d-flex justify-content-center">
        Welcome to the Holy Frijole Chili Cook Off!
      </h2>
      <h3 className="d-flex justify-content-center">Eat some chili soon...</h3>
      <Countdown />
      <div>
        <Link to="/register">
          <button className="btn btn-danger">Create Account</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-danger">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
