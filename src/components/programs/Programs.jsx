import React from "react";
import "./Programs.css";
import program1 from "../../assets/program-1.png";
import program2 from "../../assets/program-2.png";
import program3 from "../../assets/program-3.png";
import programIcon1 from "../../assets/program-icon-1.png";
import programIcon2 from "../../assets/program-icon-2.png";
import programIcon3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program1} alt="Program1" />
        <div className="caption">
          <img src={programIcon1} alt="ProgramIcon1" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="Program2" />
        <div className="caption">
          <img src={programIcon2} alt="ProgramIcon2" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="Program3" />
        <div className="caption">
          <img src={programIcon3} alt="ProgramIcon3" />
          <p>Post Graduation Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
