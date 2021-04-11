import React from "react";
import { Container, ProductName } from "./style";
import ItemQuantity from "../ItemQuantity/ItemQuantity";
import ItemOptions from "../ItemOptions/ItemOptions";

import { useDispatchShopping } from "context/ShoppingContext";
const Item = ({ item }) => {
  const dispatch = useDispatchShopping();
  const { shoppingItem, shoppingItemId } = item;
  const { name, qty } = shoppingItem;
  return (
    <Container>
      <ProductName>{name}</ProductName>
      <ItemQuantity
        dispatch={dispatch}
        qty={qty}
        shoppingItemId={shoppingItemId}
      />
      <ItemOptions dispatch={dispatch} shoppingItemId={shoppingItemId} />
    </Container>
  );
};

export default Item;
