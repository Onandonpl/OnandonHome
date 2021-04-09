import React from "react";
import { Temp } from "./style";

const Temperature = ({ temperature }) => {
  return <Temp>{temperature.day}</Temp>;
};

export default Temperature;
