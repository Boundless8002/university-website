import React from "react";
import "./Hero.css";
import darkArrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Your journey to excellence starts here.</h1>
        <p>
          Empowering minds and shaping futures through quality education and
          innovative learning experiences.
        </p>
        <button className="btn">
          Explore More <img src={darkArrow} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
