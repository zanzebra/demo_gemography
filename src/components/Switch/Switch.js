import React from "react";
import { Switch as StyledSwitch } from "../styles";

const Switch = ({ themeToggler }) => {
  return (
    <StyledSwitch>
      <input type="checkbox" id="switch" onChange={themeToggler} />
      <label for="switch">
        <div className="button"></div>
      </label>
    </StyledSwitch>
  );
};

export default Switch;
