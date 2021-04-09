import React from "react";
import { Container, Title, Description } from "./style";
import MenuVisable from "./MenuVisable";
import {
  useDispatchSettings,
  useSettings,
} from "../../../../context/SettingsContext";
const MenuSetting = () => {
  const settings = useSettings();
  const dispatch = useDispatchSettings();
  const { menu } = settings;
  return (
    <Container>
      <Title>Menu</Title>
      <Description>Ustawienia bocznego menu.</Description>
      <MenuVisable menu={menu} dispatch={dispatch} />
    </Container>
  );
};

export default MenuSetting;
