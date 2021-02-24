import React from "react";
import styled from "styled-components/macro";
import "react-calendar/dist/Calendar.css";
import Popup from "reactjs-popup";
import { AiOutlinePlusCircle } from "react-icons/ai";

import PlannedExpense from "../PlannedExpense/PlannedExpense";
import AddPlannedExpense from "./AddPlannedExpense";

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
        <AddPlannedExpense categoryId={categoryId} monthId={monthId} />
      </Popup>
      <div>
        <MonthName>{monthName}</MonthName>
        {expenses.map((expense) => (
          <PlannedExpense
            key={expense.monthId}
            categoryId={categoryId}
            expenseId={expense.monthId}
            expenseData={expense.monthData}
          />
        ))}
      </div>
    </MonthContainer>
  );
};

export default Month;

const MonthContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 1px;
  padding-top: 15px;
  width: 150px;
  min-height: 20px;
  overflow: hidden;

  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const TriggerButton = styled.button`
  position: absolute;
  top: 1px;
  right: 1px;
  width: 15px;
  height: 15px;
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

const MonthName = styled.p`
  position: absolute;
  top: 1px;
  left: 1px;
  
  font-size: 10px;
`;
