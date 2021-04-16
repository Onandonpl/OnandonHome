import React from "react";
import { Container, ProductName } from "./style";

import ItemQuantity from "../ItemQuantity/ItemQuantity";
import ItemOptions from "../ItemOptions/ItemOptions";

const Item = ({ data }) => {
  const { item, itemId } = data;
  const { name, qty } = item;
  return (
    <Container>
      <ProductName>{name}</ProductName>
      <ItemQuantity qty={qty} itemId={itemId} />
      <ItemOptions itemId={itemId} />
    </Container>
  );
};

export default Item;
