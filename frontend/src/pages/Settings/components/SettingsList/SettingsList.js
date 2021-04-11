import React from "react";
import { Container } from "./style";
import MenuSetting from "../MenuSetting/MenuSetting";
import WeatherSetting from "../LocalizationSetting/LocalizationSetting";
import {
  useDispatchSettings,
  useSettings,
} from "../../../../context/SettingsContext";
const SettingsList = () => {
  const settings = useSettings();
  const dispatch = useDispatchSettings();
  const { menu, localization } = settings.settings;

  return (
    <Container>
      <MenuSetting dispatch={dispatch} menu={menu} />
      <WeatherSetting dispatch={dispatch} localization={localization} />
    </Container>
  );
};

export default SettingsList;
