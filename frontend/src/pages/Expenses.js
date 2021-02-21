import React from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet";

import ExpensesList from "../components/ExpensesList/ExpensesList";

const Expenses = () => {
  return (
    <ExpensesContainer>
      <Helmet>
        <title>Wydatki</title>
      </Helmet>
      <ExpensesList />
    </ExpensesContainer>
  );
};

export default Expenses;

const ExpensesContainer = styled.div`
  min-height: calc(100vh - 50px);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #f1f1ff;
`;
