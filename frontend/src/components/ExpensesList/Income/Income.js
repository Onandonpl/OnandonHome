import React from "react";
import styled from "styled-components/macro";
import Transaction from "../Transaction/Transaction";

const Income = ({ filteredByType }) => {
  return (
    <IncomeContainer>
      {filteredByType.map((value) => (
        <Transaction key={value.id} transactionData={value} />
      ))}
    </IncomeContainer>
  );
};

export default Income;
const IncomeContainer = styled.div`
  height: 100%;
  width: 100%;
`;
