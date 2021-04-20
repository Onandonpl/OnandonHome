import React from "react";
import { SettingsProvider } from "./SettingsContext";
import { WeatherProvider } from "./WeatherContext";
import { ShoppingProvider } from "./ShoppingContext";
import { BudgetProvider } from "./BudgetContext";
import { DevicesProvider } from "./DevicesContext";
import { HomeDevicesProvider } from "./HomeDevicesContext";
const Providers = ({ children }) => {
  return (
    <SettingsProvider>
      <WeatherProvider>
        <ShoppingProvider>
          <BudgetProvider>
            <DevicesProvider>
              <HomeDevicesProvider>{children}</HomeDevicesProvider>
            </DevicesProvider>
          </BudgetProvider>
        </ShoppingProvider>
      </WeatherProvider>
    </SettingsProvider>
  );
};

export default Providers;
