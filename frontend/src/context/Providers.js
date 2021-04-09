import React from "react";
import { SettingsProvider } from "./SettingsContext";
const Providers = ({ children }) => {
  return <SettingsProvider>{children}</SettingsProvider>;
};

export default Providers;
