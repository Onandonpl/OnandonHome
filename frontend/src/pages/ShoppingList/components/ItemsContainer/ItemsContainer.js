import React from "react";
import { useShopping } from "context/ShoppingContext";
import Item from "../Item/Item";

const ItemsContainer = () => {
  const shopping = useShopping();
  const { itemList } = shopping;

  const items = itemList.map((value) => {
    const { itemId } = value;
    return <Item key={itemId} data={value} />;
  });

  return <>{items}</>;
};

export default ItemsContainer;
