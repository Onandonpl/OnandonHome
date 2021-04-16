import React from "react";
import { Container } from "./style";

import ItemList from "./components/ItemsList/ItemsList";
import Basic from "./components/Basic/Basic";
import AddItem from "./components/AddItem/AddItem";

const ShoppingList = () => {
  return (
    <Container>
      <AddItem />
      <Basic />
      <ItemList />
    </Container>
  );
};

export default ShoppingList;
