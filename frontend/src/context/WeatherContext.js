import React, { useState, useEffect, useContext, createContext } from "react";
import { useSettings } from "./SettingsContext";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [state, setState] = useState({
    weather: { current: [], daily: [], hourly: [] },
    error: false,
    loading: true,
  });

  const settings = useSettings();
  const { loading } = settings;
  const { localization } = settings.settings;
  const { longitude, latitude } = localization;
  const apiAddres = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`;

  const fetchWeatherData = async () => {
    const response = await fetch(apiAddres);
    const data = await response.json();

    if (data.message) {
      setState({
        weather: { current: [], daily: [], hourly: [] },
        error: data.message,
        loading: false,
      });
    } else {
      setState({
        weather: {
          current: data.current,
          daily: data.daily,
          hourly: data.hourly,
        },
        error: false,
        loading: false,
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
