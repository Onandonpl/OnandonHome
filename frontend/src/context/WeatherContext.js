import React, { useState, useEffect, useContext, createContext } from "react";
import { useSettings } from "./SettingsContext";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [state, setState] = useState("loading");
  const settings = useSettings();
  const { longitude, latitude, loading } = settings;
  const apiAddres = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`;

  const fetchWeatherData = async () => {
    const response = await fetch(apiAddres);
    const data = await response.json();

    if (data.message) {
      setState({ error: data.message });
    } else {
      setState({
        current: data.current,
        daily: data.daily,
        hourly: data.hourly,
      });
    }
  };

  useEffect(() => {
    if (!loading) {
      fetchWeatherData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [longitude, latitude]);

  return (
    <WeatherContext.Provider value={state}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => {
  return useContext(WeatherContext);
};