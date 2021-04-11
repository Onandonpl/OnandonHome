import React from "react";
import { useAlert } from "react-alert";

import { AiOutlineClose } from "react-icons/ai";
import { Button } from "./style";

const DeleteItem = ({ dispatch, shoppingItemId }) => {
  const alert = useAlert();

  const handleDeleteItem = () => {
    const payload = {
      shoppingItemId: shoppingItemId,
    };
    dispatch({ type: "DELETE_ITEM", payload: payload });
    alert.show("Usunięto przedmiot.");
  };
  return (
    <Button onClick={handleDeleteItem}>
      <AiOutlineClose />
    </Button>
  );
};

export default DeleteItem;
