import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="About" className="about-img" />
        <img
          src={play_icon}
          alt="Playicon"
          className="play-icon"
          onClick={() => setPlayState(true)}
        />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Empower your future here!</h2>
        <p>
          A university cultivates a vibrant community of scholars and learners,
          inspiring innovation and lifelong curiosity.
        </p>
        <p>
          It serves as a beacon of knowledge and discovery, shaping the future
          through education and research.
        </p>
        <p>
          A university is a sanctuary of wisdom, where minds are enlightened and
          dreams are nurtured into reality.
        </p>
      </div>
    </div>
  );
};

export default About;
