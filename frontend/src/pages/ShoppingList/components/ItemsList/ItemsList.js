import React from "react";
import { Container } from "./style";
import { useShopping } from "context/ShoppingContext";
import ItemsContainer from "../ItemsContainer/ItemsContainer";

const ItemsList = () => {
  const shopping = useShopping();
  const { loading } = shopping;

  return (
    <Container>{loading ? <div>loading</div> : <ItemsContainer />}</Container>
  );
};

export default ItemsList;
