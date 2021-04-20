import React from "react";
import { RiTempHotFill } from "react-icons/ri";
import { ParamContainer } from "./style";

const FeelsLike = ({ feelsLike }) => {
  return (
    <ParamContainer>
      <p>
        <RiTempHotFill />
      </p>
      {feelsLike} °C
    </ParamContainer>
  );
};

export default FeelsLike;
