import React from "react";
import { Container } from "./style";

import ItemInfo from "../ItemInfo/ItemInfo";
import Options from "../ItemOptions/ItemOptions";

const Item = ({ data }) => {
  const { item, itemId } = data;
  const { type } = item;
  
  return (
    <Container type={type}>
      <ItemInfo info={item} />
      <Options itemId={itemId} />
    </Container>
  );
};

export default Item;
