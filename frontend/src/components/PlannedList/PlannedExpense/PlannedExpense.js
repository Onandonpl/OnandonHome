import React from "react";
import {
  addTransaction,
  updatePlannedStatus,
} from "../../../utils/firebase/firebaseFunctions";

const PlannedExpense = ({ expenseData, expenseId, categoryId }) => {
  const {
    plannedExpenseName,
    amount,
    mainCategory,
    subCategory,
    created,
    time,
    type,
  } = expenseData;

  return (
    <div>
      {plannedExpenseName}
      {expenseData.name}
      <button
        onClick={() => {
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
        }}
      >
        X
      </button>
    </div>
  );
};

export default PlannedExpense;
