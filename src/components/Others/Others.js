import React from "react";
import { Others as StyledOthers } from "../styles";

const Others = ({ stars, issues, time }) => {
  return (
    <StyledOthers>
      stars {stars} Issues: {issues} Time: last updated on {time.toString()}
    </StyledOthers>
  );
};

export default Others;
