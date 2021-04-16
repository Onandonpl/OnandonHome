import React from "react";
import { Container } from "./style";
import { useBudget } from "context/BudgetContext";

import ItemsContainer from "../ItemsContainer/ItemsContainer";

const ItemsList = () => {
  const budget = useBudget();
  const { loading } = budget;

  return (
    <Container>{loading ? <div>loading</div> : <ItemsContainer />}</Container>
  );
};

export default ItemsList;
