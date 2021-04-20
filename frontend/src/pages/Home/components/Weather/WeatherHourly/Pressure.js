import React from "react";
import { WiBarometer } from "react-icons/wi";
import { ParamContainer } from "./style";

const Pressure = ({ pressure }) => {
  return (
    <ParamContainer>
      <p>
        <WiBarometer />
      </p>
      {pressure} hPa
    </ParamContainer>
  );
};

export default Pressure;
