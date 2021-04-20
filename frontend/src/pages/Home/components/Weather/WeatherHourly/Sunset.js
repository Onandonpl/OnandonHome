import React from "react";
import { FiSunset } from "react-icons/fi";
import { ParamContainer } from "./style";
const Sunset = ({ sunset }) => {
  const time = new Date(sunset * 1000).toLocaleTimeString();

  return (
    <ParamContainer>
      <p>
        <FiSunset />
      </p>
      {time}
    </ParamContainer>
  );
};

export default Sunset;
