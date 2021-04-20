import React from "react";
import { WiHumidity } from "react-icons/wi";
import { ParamContainer } from "./style";

const Humidity = ({ humidity }) => {
  return (
    <ParamContainer>
      <p>
        <WiHumidity />
      </p>
      {humidity} %
    </ParamContainer>
  );
};

export default Humidity;
