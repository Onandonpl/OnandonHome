import React from "react";
import { Container } from "./style";
import SettingsList from "./components/SettingsList/SettingsList";
import ContainerTitle from "../../components/ContainerTitle/ContainerTitle";

const Settings = () => {
  return (
    <Container>
      <ContainerTitle text={"Ustawienia"} />
      <SettingsList />
    </Container>
  );
};

export default Settings;
