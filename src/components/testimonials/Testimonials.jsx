import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import User1 from "../../assets/user-1.png";
import User2 from "../../assets/user-2.png";
import User3 from "../../assets/user-3.png";
import User4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="Next"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="Back"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User1} alt="User1" />
                <div>
                  <h3>Willam Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>
                The faculty is incredibly supportive, offering guidance and
                encouragement at every step. The campus is vibrant and full of
                opportunities for personal and professional growth.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User2} alt="User2" />
                <div>
                  <h3>Alex Taylor</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>
                The faculty is incredibly supportive, offering guidance and
                encouragement at every step. The campus is vibrant and full of
                opportunities for personal and professional growth.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User3} alt="User3" />
                <div>
                  <h3>Adam Willams</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>
                The faculty is incredibly supportive, offering guidance and
                encouragement at every step. The campus is vibrant and full of
                opportunities for personal and professional growth.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User4} alt="User4" />
                <div>
                  <h3>Mark Johnson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>
                The faculty is incredibly supportive, offering guidance and
                encouragement at every step. The campus is vibrant and full of
                opportunities for personal and professional growth.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
