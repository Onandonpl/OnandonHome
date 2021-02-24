import React from "react";

import ExpensesList from "../components/ExpensesList/ExpensesList";
import PageContainer from "../components/Styled/PageContainer";

const Expenses = () => {
  return (
    <PageContainer title={"Wydatki"}>
      <ExpensesList />
    </PageContainer>
  );
};

export default Expenses;
