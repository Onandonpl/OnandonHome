import React from "react";
import { DayContainer } from "./style";
const Day = ({ time }) => {
  const dailyTime = new Date(time * 1000).toLocaleDateString();

  return <DayContainer>{dailyTime}</DayContainer>;
};

export default Day;
