import React from "react";
import { Container, WeatherContainer } from "./style";
import { useWeather } from "context/WeatherContext";
import WeatherHourly from "./WeatherHourly/WeatherHourly";
const Weather = () => {
  const weather = useWeather();
  const { loading, error } = weather;
  const { hourly } = weather.weather;
  return (
    <Container>
      {loading || error ? (
        <div>loading</div>
      ) : (
        <WeatherContainer>
          <WeatherHourly hourly={hourly} />
        </WeatherContainer>
      )}
    </Container>
  );
};

export default Weather;
