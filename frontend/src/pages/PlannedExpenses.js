import React from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet";

import PlannedList from "../components/PlannedList/PlannedList";

const PlannedExpenses = () => {
  return (
    <ExpensesContainer>
      <Helmet>
        <title>Planowane wydatki</title>
      </Helmet>
      <PlannedList />
    </ExpensesContainer>
  );
};

export default PlannedExpenses;

const ExpensesContainer = styled.div`
  min-height: calc(100vh - 50px);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #f1f1ff;
`;
