import React from "react";
import { Container, Title, Description } from "./style";

import {
  useDispatchSettings,
  useSettings,
} from "../../../../context/SettingsContext";
import WeatherForm from "./WeatherForm";
const WeatherSetting = () => {
  const settings = useSettings();
  const dispatch = useDispatchSettings();
  const { longitude, latitude } = settings;
  
  return (
    <Container>
      <Title>Pogoda</Title>
      <Description>Ustawienia lokalizacji.</Description>
      <WeatherForm
        dispatch={dispatch}
        longitude={longitude}
        latitude={latitude}
      />
    </Container>
  );
};

export default WeatherSetting;
