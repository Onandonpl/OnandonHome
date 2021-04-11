import React from "react";
import { Container, Title, Description } from "./style";

import WeatherForm from "./LocalizationForm";
const LocalizationSetting = ({ localization, dispatch }) => {
  return (
    <Container>
      <Title>Pogoda</Title>
      <Description>Ustawienia lokalizacji.</Description>
      <WeatherForm dispatch={dispatch} localization={localization} />
    </Container>
  );
};

export default LocalizationSetting;
