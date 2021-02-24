import React from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ color, handleChangeColor }) => {
  return <SketchPicker color={color} onChange={handleChangeColor} />;
};

export default ColorPicker;
