import React from "react";
import { IconContainer } from "./style";
const Icon = ({ weatherIcon }) => {
  const icon = `/OpenWeatherMapIcons/${weatherIcon[0].icon}.svg`;

  return (
    <IconContainer>
      <img src={icon} alt="weather"></img>
    </IconContainer>
  );
};

export default Icon;
