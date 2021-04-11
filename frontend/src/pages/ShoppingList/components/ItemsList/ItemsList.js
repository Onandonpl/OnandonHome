import React from "react";
import { Container } from "./style";
import Item from "../Item/Item";
import Loading from "components/Loading/Loading";
import { useShopping } from "context/ShoppingContext";
const ItemsList = () => {
  const shopping = useShopping();
  const { shoppingList, loading } = shopping;

  const renderList = () => {
    return shoppingList.map((item) => {
      return <Item key={item.shoppingItemId} item={item} />;
    });
  };

  return <Container>{loading ? <Loading /> : renderList()}</Container>;
};

export default ItemsList;
