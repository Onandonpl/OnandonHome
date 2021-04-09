import React from "react";
import { SettingsProvider } from "./SettingsContext";
import { WeatherProvider } from "./WeatherContext";
const Providers = ({ children }) => {
  return (
    <SettingsProvider>
      <WeatherProvider>{children}</WeatherProvider>
    </SettingsProvider>
  );
};

export default Providers;
