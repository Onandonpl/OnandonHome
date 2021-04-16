import React from "react";
import { Button } from "./style";

import { useDispatchBudget } from "context/BudgetContext";

import { useAlert } from "react-alert";
import { AiOutlineClose } from "react-icons/ai";

const DeleteItem = ({ itemId }) => {
  const alert = useAlert();
  const dispatch = useDispatchBudget();

  const handleDeleteItem = () => {
    const payload = itemId;
    dispatch({ type: "DELETE_ITEM", payload: payload });
    alert.show("Usunięto transakcje.");
  };

  return (
    <Button onClick={handleDeleteItem}>
      <AiOutlineClose />
    </Button>
  );
};

export default DeleteItem;
