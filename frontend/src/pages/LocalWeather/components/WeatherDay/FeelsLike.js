import React from "react";
import { RiTempHotFill } from "react-icons/ri";
import { ParamContainer } from "./style";

const FeelsLike = ({ feelsLike }) => {
  const { day } = feelsLike;
  return (
    <ParamContainer>
      <p>
        <RiTempHotFill />
      </p>
      {day} °C
    </ParamContainer>
  );
};

export default FeelsLike;
