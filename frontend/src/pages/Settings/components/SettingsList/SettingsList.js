import React from "react";
import { Container } from "./style";
import MenuSetting from "../MenuSetting/MenuSetting";
import WeatherSetting from "../WeatherSetting/WeatherSetting";
const SettingsList = () => {
  return (
    <Container>
      <MenuSetting />
      <WeatherSetting />
    </Container>
  );
};

export default SettingsList;
