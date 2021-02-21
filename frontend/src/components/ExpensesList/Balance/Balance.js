import React from "react";
import styled from "styled-components/macro";

const Balance = ({ transactionData }) => {
  const balance =
    transactionData.length !== 0
      ? transactionData
          .map((value) => value.transaction.amount)
          .reduce((prev, curr) => prev + curr)
      : 0;

  return (
    <BalanceContainer>
      <p>Stan konta</p>
      <p>{balance} zł</p>
    </BalanceContainer>
  );
};

export default Balance;
const BalanceContainer = styled.div`
  width: 300px;
  height: 60px;

  background-color: #f5f6f8;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p:nth-child(1) {
    font-weight: 500;
  }
`;
