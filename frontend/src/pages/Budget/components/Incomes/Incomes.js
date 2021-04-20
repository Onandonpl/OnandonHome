import React from "react";
import { Container } from "./style";

import Item from "../Item/Item";

const Incomes = ({ filteredItemsByDate }) => {
  return (
    <Container>
      {filteredItemsByDate.map((value) => {
        const { itemId } = value;
        return <Item key={itemId} data={value} />;
      })}
    </Container>
  );
};

export default Incomes;
