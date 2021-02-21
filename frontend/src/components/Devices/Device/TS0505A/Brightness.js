import React, { useState } from "react";
import styled from "styled-components/macro";
import client from "../../../../config/mqttConnect";

const Brightness = ({ devicename, brightness }) => {
  const [value, setValue] = useState(brightness);

  const handleValue = (e) => {
    setValue(parseInt(e.target.value));
    client.publish(
      `zigbee2mqtt/${devicename}/set`,
      JSON.stringify({ brightness: parseInt(e.target.value) })
    );
  };

  return (
    <Bright>
      <BrightRange
        type="range"
        min={0}
        max={254}
        value={value}
        onChange={(e) => {
          handleValue(e);
        }}
      />
    </Bright>
  );
};

export default Brightness;
const Bright = styled.div`
  width: 100%;
`;

const BrightRange = styled.input`
  cursor: pointer;
  height: 16px;
  width: 100%;

  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 1) 99%
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
