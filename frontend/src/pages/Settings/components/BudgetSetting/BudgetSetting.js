import React from "react";
import { Container, Title, Description } from "./style";
import OptionForm from "./OptionForm";
const BudgetSetting = ({ dispatch }) => {
  return (
    <Container>
      <Title>Budżet</Title>
      <Description>Ustawienia budżetu.</Description>
      <OptionForm dispatch={dispatch} />
    </Container>
  );
};

export default BudgetSetting;
