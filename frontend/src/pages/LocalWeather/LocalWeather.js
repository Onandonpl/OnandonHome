import React from "react";
import { useWeather } from "../../context/WeatherContext";
import { Container } from "./style";
import WeatherList from "./components/WeatherList/WeatherList";
import WeatherError from "./components/WeatherError/WeatherError";
import Loading from "components/Loading/Loading";

const LocalWeather = () => {
  const weather = useWeather();
  const { daily } = weather.weather;
  const { error, loading } = weather;
  if (error) {
    return <WeatherError message={weather.error} />;
  }
  return (
    <Container>
      {loading ? <Loading /> : <WeatherList daily={daily} />}
    </Container>
  );
};

export default LocalWeather;
