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
        <Link to="/signup">
          <button className="btn btn-primary">Create Account</button>
        </Link>
        <button className="btn btn-primary">Sign In</button>
      </div>
    </div>
  );
};

export default Landing;
