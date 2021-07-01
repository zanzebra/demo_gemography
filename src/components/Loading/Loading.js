import React from "react";
import { Loading as StyledLoading } from "../styles";
import { Spin } from "antd";

const Loading = ({ className }) => {
  return (
    <StyledLoading>
      <div className={className}>
        <Spin />
      </div>
      ,
    </StyledLoading>
  );
};

export default Loading;
