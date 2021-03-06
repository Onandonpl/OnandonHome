import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";

import Transaction from "../Transaction/Transaction";
import Income from "../Income/Income";
import Outcome from "../Expense/Expense";
import BalanceChart from "./BalanceChart";

const TransactionList = ({ filteredByDate }) => {
  const [filteredByType, setFilteredByType] = useState(filteredByDate);
  const [type, setType] = useState("all");

  useEffect(() => {
    setFilteredByType(filteredByDate);
    setType("all");
  }, [filteredByDate]);

  const filterByIncome = () => {
    setType("income");
    const filtered = filteredByDate.filter((value) =>
      value.transaction.type === "income" ? value : null
    );
    setFilteredByType(filtered);
  };

  const filterByExpense = () => {
    setType("expense");
    const filtered = filteredByDate.filter((value) =>
      value.transaction.type === "expense" ? value : null
    );
    setFilteredByType(filtered);
  };

  const filterReset = () => {
    setType("all");
    setFilteredByType(filteredByDate);
  };

  const renderTransactions = () => {
    if (type === "all" && filteredByType !== null) {
      return filteredByType.map((value) => (
        <Transaction key={value.id} transactionData={value} />
      ));
    }
    if (type === "income" && filteredByType !== null) {
      return <Income filteredByType={filteredByType} />;
    }
    if (type === "expense" && filteredByType !== null) {
      return <Outcome filteredByType={filteredByType} />;
    }
  };

  const balanceIncome = () => {
    const filtered = filteredByDate.filter((value) =>
      value.transaction.type === "income" ? value : null
    );
    return filtered.length !== 0
      ? filtered
          .map((value) => value.transaction.amount)
          .reduce((prev, curr) => prev + curr)
      : 0;
  };

  const balanceExpense = () => {
    const filtered = filteredByDate.filter((value) =>
      value.transaction.type === "expense" ? value : null
    );
    return filtered.length !== 0
      ? filtered
          .map((value) => value.transaction.amount)
          .reduce((prev, curr) => prev + curr)
      : 0;
  };

  return (
    <Container>
      <Menu>
        <TriggerButton onClick={filterByIncome} props={"green"}>
          <AiOutlineArrowUp />
          <p>Przychody</p>
        </TriggerButton>
        <TriggerButton onClick={filterByExpense} props={"red"}>
          <AiOutlineArrowDown />
          <p>Wydatki</p>
        </TriggerButton>
        <TriggerButton onClick={filterReset}>
          <BiRefresh />
          <p>Zresetuj</p>
        </TriggerButton>
      </Menu>
      <Content>
        {renderTransactions()}
        {type === "all" ? (
          <Chart>
            <BalanceChart expense={balanceExpense()} income={balanceIncome()} />
          </Chart>
        ) : null}
      </Content>
    </Container>
  );
};

export default TransactionList;
const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 5px;

  background-color: #f5f6f8;
`;
const TriggerButton = styled.button`
  margin: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  font-size: 25px;
  cursor: pointer;
  color: ${({ props }) => props};

  transition: linear 0.1s;

  p {
    font-size: 11px;
  }
  &:hover {
    scale: 1.1;
  }
  &:focus {
    scale: 1.1;
  }
`;
const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Content = styled.div``;
const Chart = styled.div`
  margin: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
