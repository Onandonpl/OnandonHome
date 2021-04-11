import React from "react";
import { SettingsProvider } from "./SettingsContext";
import { WeatherProvider } from "./WeatherContext";
import { ShoppingProvider } from "./ShoppingContext";
const Providers = ({ children }) => {
  return (
    <SettingsProvider>
      <WeatherProvider>
        <ShoppingProvider> {children}</ShoppingProvider>
      </WeatherProvider>
    </SettingsProvider>
  );
};

export default Providers;
