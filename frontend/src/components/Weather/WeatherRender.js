import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useAlert } from "react-alert";

import Loading from "../Animations/Loading";
import WeatherDaily from "./WeatherDaily";
import WeatherHourly from "./WeatherHourly";

const WeatherRender = ({ positionData }) => {
  const [weatherData, setWeatherData] = useState(null);
  const alert = useAlert();

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${positionData.latitude}&lon=${positionData.longitude}&exclude=minutely&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
      );
      const data = await response.json();

      const showMessage = () => {
        return data.message ? alert.show(data.message) : setWeatherData(data);
      };
      showMessage();
    };
    return fetchWeather();
  }, [alert, positionData.latitude, positionData.longitude]);

  if (!weatherData) {
    return <Loading />;
  }

  return (
    <WeatherContainer>
      <WeatherHourly weatherData={weatherData.hourly}></WeatherHourly>
      <DailyList>
        {weatherData.daily.map((daily) => (
          <WeatherDaily key={daily.dt} weatherData={daily} />
        ))}
      </DailyList>
    </WeatherContainer>
  );
};

export default WeatherRender;

const WeatherContainer = styled.div`
  min-height: 100vh;
  width: 100%;

  background-color: rgb(63, 66, 75);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DailyList = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
