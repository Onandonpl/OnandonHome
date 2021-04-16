import React from "react";
import { SettingsProvider } from "./SettingsContext";
import { WeatherProvider } from "./WeatherContext";
import { ShoppingProvider } from "./ShoppingContext";
import { BudgetProvider } from "./BudgetContext";
const Providers = ({ children }) => {
  return (
    <SettingsProvider>
      <WeatherProvider>
        <ShoppingProvider>
          <BudgetProvider> {children}</BudgetProvider>
        </ShoppingProvider>
      </WeatherProvider>
    </SettingsProvider>
  );
};

export default Providers;
