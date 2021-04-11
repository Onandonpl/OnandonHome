import React from "react";
import { Container, Title, Description } from "./style";
import MenuVisable from "./MenuVisable";

const MenuSetting = ({ dispatch, menu }) => {
  return (
    <Container>
      <Title>Menu</Title>
      <Description>Ustawienia bocznego menu.</Description>
      <MenuVisable menu={menu} dispatch={dispatch} />
    </Container>
  );
};

export default MenuSetting;
