import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
import chili1 from "../utils/photos/chili/chili1.jpg";
import chili2 from "../utils/photos/chili/chili2.jpg";
import chili3 from "../utils/photos/chili/chili3.jpg";
import chili4 from "../utils/photos/chili/chili4.jpg";

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

  const carousel = (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade w-100"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="4000">
          <img src={chili1} alt="Pot of chili..." className="d-block w-100" />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src={chili2} alt="Pot of chili..." className="d-block w-100" />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src={chili3} alt="Pot of chili..." className="d-block w-100" />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src={chili4} alt="Pot of chili..." className="d-block w-100" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {/* <div className="landing border border-danger m-5">
        <h2 className="d-flex justify-content-center">
          Welcome to the Holy Frijole Chili Cook Off!
        </h2>
        <div>{isAuthenticated ? "" : authLinks}</div>
      </div> */}
      {carousel}
    </div>
  );
};

export default Landing;
