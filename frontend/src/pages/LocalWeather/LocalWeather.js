import React from "react";
import { useWeather } from "../../context/WeatherContext";
import { Container } from "./style";
import WeatherList from "./components/WeatherList/WeatherList";
const LocalWeather = () => {
  const weather = useWeather();
  const { daily } = weather;
  return (
    <Container>
      <WeatherList daily={daily} />
    </Container>
  );
};

export default LocalWeather;
