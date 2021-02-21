import React from "react";
import styled from "styled-components/macro";

import { HuePicker } from "react-color";
const ColorPicker = ({ color, handleChange }) => {
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
