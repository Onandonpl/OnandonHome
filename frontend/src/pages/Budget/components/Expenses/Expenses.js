import React from "react";
import { Container } from "./style";

import Item from "../Item/Item";
import ExpensesChart from "../Charts/ExpensesChart";
const Expenses = ({ filteredItemsByDate }) => {
  return (
    <Container>
      {filteredItemsByDate.map((value) => {
        const { itemId } = value;
        return <Item key={itemId} data={value} />;
      })}
      <ExpensesChart filteredItemsByDate={filteredItemsByDate} />
    </Container>
  );
};

export default Expenses;
