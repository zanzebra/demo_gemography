import React from "react";
import { Others as StyledOthers } from "../styles";
import { AiOutlineStar } from "react-icons/ai";
import { VscIssues } from "react-icons/vsc";

const Others = ({ stars, issues, time }) => {
  console.log(time);
  return (
    <StyledOthers>
      <div className="badges">
        <span className="stars">
          <span>
            <AiOutlineStar />
          </span>
          {stars}
        </span>
        <span className="issues">
          <span>
            <VscIssues />
          </span>
          {issues}
        </span>
      </div>
      <div className="time">Time: Submitted on {time.toString()}</div>
    </StyledOthers>
  );
};

export default Others;
