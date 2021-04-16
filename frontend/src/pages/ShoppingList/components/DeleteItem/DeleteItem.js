import React from "react";
import { Button } from "./style";

import { useDispatchShopping } from "context/ShoppingContext";

import { useAlert } from "react-alert";
import { AiOutlineClose } from "react-icons/ai";

const DeleteItem = ({ itemId }) => {
  const alert = useAlert();
  const dispatch = useDispatchShopping();

  const handleDeleteItem = () => {
    const payload = itemId;
    dispatch({ type: "DELETE_ITEM", payload: payload });
    alert.show("Usunięto produkt.");
  };

  return (
    <Button onClick={handleDeleteItem}>
      <AiOutlineClose />
    </Button>
  );
};

export default DeleteItem;
