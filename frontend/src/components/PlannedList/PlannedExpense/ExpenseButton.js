import React from "react";
import styled from "styled-components/macro";

import {
  addTransaction,
  updatePlannedStatus,
} from "../../../utils/firebase/firebaseFunctions";
import { AiOutlineCheck } from "react-icons/ai";

const ExpenseButton = ({ expenseData, expenseId, categoryId }) => {
  const {
    plannedExpenseName,
    amount,
    mainCategory,
    subCategory,
    created,
    time,
    type,
  } = expenseData;
  const handleAddTransaction = () => {
    addTransaction(
      plannedExpenseName,
      type,
      amount,
      mainCategory,
      subCategory,
      created,
      time
    );
    updatePlannedStatus(categoryId, expenseId, true);
  };
  return (
    <Button onClick={handleAddTransaction}>
      <AiOutlineCheck />
    </Button>
  );
};

export default ExpenseButton;
const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  font-size: 20px;
  color: #2ea449;
`;
