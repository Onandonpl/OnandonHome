import React from "react";
import { Container } from "./style";
import Item from "../Item/Item";
import LoadingList from "../LoadingList/LoadingList";
import { useShopping } from "../../../../context/ShoppingContext";
const ItemsList = () => {
  const shopping = useShopping();
  const { shoppingList, loading } = shopping;

  const renderList = () => {
    return shoppingList.map((item) => {
      return <Item key={item.shoppingItemId} item={item} />;
    });
  };

  return <Container>{loading ? <LoadingList /> : renderList()}</Container>;
};

export default ItemsList;
