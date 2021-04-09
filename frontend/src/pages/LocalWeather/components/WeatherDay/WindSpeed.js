import React from "react";
import { BiWind } from "react-icons/bi";
import { ParamContainer } from "./style";
const WindSpeed = ({ windSpeed }) => {
  const speed = (windSpeed * 1.609344).toFixed(1);
  return (
    <ParamContainer>
      <p>
        <BiWind />
      </p>
      {speed} km/h
    </ParamContainer>
  );
};

export default WindSpeed;
