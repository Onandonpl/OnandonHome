import React from "react";

import PageContainer from "../components/Styled/PageContainer";
import WeatherData from "../components/Weather/WeatherData";
const Weather = () => {
  return (
    <PageContainer title={"Pogoda"}>
      <WeatherData />
    </PageContainer>
  );
};

export default Weather;
