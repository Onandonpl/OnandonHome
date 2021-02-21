import React, { useState } from "react";
import styled from "styled-components/macro";
import client from "../../../../config/mqttConnect";

const ColorTemp = ({ devicename, color_temp }) => {
  const [value, setValue] = useState(color_temp);

  const handleValue = (e) => {
    setValue(parseInt(e.target.value));
    client.publish(
      `zigbee2mqtt/${devicename}/set`,
      JSON.stringify({ color_temp: parseInt(e.target.value) })
    );
  };

  return (
    <Temp>
      <TempRange
        type="range"
        min={150}
        max={500}
        value={value}
        onChange={(e) => {
          handleValue(e);
        }}
      />
    </Temp>
  );
};

export default ColorTemp;
const Temp = styled.div`
  width: 100%;
`;

const TempRange = styled.input`
  cursor: pointer;
  height: 16px;
  width: 100%;

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(222, 140, 23, 1) 99%
  );

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    background: transparent;
  }

  &::-moz-range-progress {
    background: transparent;
  }
`;
