import React from "react";
import { FiSunrise } from "react-icons/fi";
import { ParamContainer } from "./style";

const Sunrise = ({ sunrise }) => {
  const time = new Date(sunrise * 1000).toLocaleTimeString();

  return (
    <ParamContainer>
      <p>
        <FiSunrise />
      </p>
      {time}
    </ParamContainer>
  );
};

export default Sunrise;
