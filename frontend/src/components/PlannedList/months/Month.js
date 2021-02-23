import React from "react";
import styled from "styled-components/macro";
import "react-calendar/dist/Calendar.css";
import Popup from "reactjs-popup";
import { AiOutlineCalendar, AiOutlinePlusCircle } from "react-icons/ai";

import PlannedExpense from "../PlannedExpense/PlannedExpense";
import PlannedExpenseAdd from "./PlannedExpenseAdd";

const Month = ({ categoryId, monthId, monthName, expenses }) => {
  return (
    <MonthContainer>
      <Popup
        trigger={
          <TriggerButton>
            <AiOutlinePlusCircle />
          </TriggerButton>
        }
        modal
      >
        <PlannedExpenseAdd categoryId={categoryId} monthId={monthId} />
      </Popup>
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
  flex-wrap: wrap;
  margin: 1px;
  height: 50px;
  width: 150px;
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
const TriggerButton = styled.button`
  width: 15px;
  height: 15px;
  margin-right: 15px;
  background-color: transparent;
  border: none;
  font-size: 15px;
  cursor: pointer;
  transition: linear 0.1s;

  &:hover {
    scale: 1.1;
  }
  &:focus {
    scale: 1.1;
  }
`;
