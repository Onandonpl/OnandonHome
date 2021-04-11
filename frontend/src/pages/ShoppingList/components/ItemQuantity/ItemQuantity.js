import React from "react";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { QuantityContainer, Button, Operations, Summary } from "./style";
const ItemQuantity = ({ dispatch, qty, shoppingItemId }) => {
  const handleIncreaseQtyItem = () => {
    dispatch({
      type: "INCREASE_ITEM",
      payload: { shoppingItemId: shoppingItemId, qty: qty + 1 },
    });
  };
  const handleDecreaseQtyItem = () => {
    dispatch({
      type: "INCREASE_ITEM",
      payload: { shoppingItemId: shoppingItemId, qty: qty - 1 },
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
