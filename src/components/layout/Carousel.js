import React from 'react'
import chili1 from "../utils/photos/chili/chili1.jpg";
import chili2 from "../utils/photos/chili/chili2.jpg";
import chili3 from "../utils/photos/chili/chili3.jpg";
import chili4 from "../utils/photos/chili/chili4.jpg";

const Carousel = () => {
  return (
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
  )
}

export default Carousel
