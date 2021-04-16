import React from "react";
import { Container } from "./style";

import BudgetMenu from "./components/BudgetMenu/BudgetMenu";
import ItemsList from "./components/ItemsList/ItemsList";
import AccountStatus from "./components/AccountStatus/AccountStatus";

const Budget = () => {
  return (
    <Container>
      <AccountStatus />
      <BudgetMenu />
      <ItemsList />
    </Container>
  );
};

export default Budget;
