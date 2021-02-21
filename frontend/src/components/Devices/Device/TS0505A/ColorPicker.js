import React, { useState } from "react";
import styled from "styled-components/macro";
import client from "../../../../config/mqttConnect";

import { HuePicker } from "react-color";
const ColorPicker = ({ devicename }) => {
  const [color, setColor] = useState();

  const handleGosundButton = (rgb) => {
    client.publish(
      `zigbee2mqtt/${devicename}/set`,
      JSON.stringify({ color: { rgb: `${rgb.r},${rgb.g},${rgb.b}` } })
    );
  };

  const handleChange = (color) => {
    setColor(color);
    handleGosundButton(color.rgb);
  };

  return (
    <Picker>
      <HuePicker color={color} onChange={handleChange} />
    </Picker>
  );
};

export default ColorPicker;
const Picker = styled.div`
  width: 100%;
`;
