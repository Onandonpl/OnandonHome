import React from "react";
import styled from "styled-components/macro";
import "react-calendar/dist/Calendar.css";

import PlannedExpense from "../PlannedExpense/PlannedExpense";
import PlannedExpenseAdd from "./PlannedExpenseAdd";

const Month = ({ categoryId, monthId, monthName, expenses }) => {
  return (
    <MonthContainer>
      <PlannedExpenseAdd categoryId={categoryId} monthId={monthId} />
      {expenses.map((expense) => (
        <PlannedExpense
          key={expense.monthId}
          categoryId={categoryId}
          expenseId={expense.monthId}
          expenseData={expense.monthData}
        />
      ))}
    </MonthContainer>
  );
};

export default Month;

const MonthContainer = styled.div`
  display: flex;
  margin: 5px;
  height: 550px;
  width: 550px;
  background-color: red;
`;

const Form = styled.form`
  width: 30%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 35px;
`;

const Input = styled.input`
  width: 100%;

  margin: 5px;
  padding: 5px;

  border: 2px solid rgb(22, 38, 51);
`;

const ButtonSubmit = styled.input`
  width: 80%;
  border-radius: 5px;
  background-color: #1753fc;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;
