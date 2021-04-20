import React from "react";
import { Temp } from "./style";

const Temperature = ({ temperature }) => {
  const temp = Math.round(temperature);
  return <Temp> {temp}</Temp>;
};

export default Temperature;
