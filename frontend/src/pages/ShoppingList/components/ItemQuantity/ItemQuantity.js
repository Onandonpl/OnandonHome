import React from "react";
import { QuantityContainer, Button, Operations, Summary } from "./style";

import { useDispatchShopping } from "context/ShoppingContext";

import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

const ItemQuantity = ({ qty, itemId }) => {
  const dispatch = useDispatchShopping();

  const handleIncreaseQtyItem = () => {
    dispatch({
      type: "INCREASE_ITEM",
      payload: { itemId: itemId, qty: qty + 1 },
    });
  };

  const handleDecreaseQtyItem = () => {
    dispatch({
      type: "INCREASE_ITEM",
      payload: { itemId: itemId, qty: qty - 1 },
    });
  };

  return (
    <QuantityContainer>
      <Operations>
        <Button onClick={handleDecreaseQtyItem}>
          <BsArrowLeftShort />
        </Button>

        <Summary>{qty}</Summary>

        <Button onClick={handleIncreaseQtyItem}>
          <BsArrowRightShort />
        </Button>
      </Operations>
    </QuantityContainer>
  );
};

export default ItemQuantity;
