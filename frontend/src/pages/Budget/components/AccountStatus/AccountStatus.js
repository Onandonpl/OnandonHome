import React, { useState, useEffect } from "react";
import { Container, Type } from "./style";
import { useBudget } from "context/BudgetContext";

const AccountStatus = () => {
  const budget = useBudget();
  const { itemList, loading } = budget;

  const [incomeBalance, setIncomeBalance] = useState(0);
  const [expenseBalance, setExpenseBalance] = useState(0);

  useEffect(() => {
    const items = itemList.map((item) => {
      return item.item;
    });

    const balanceByType = (balanceType) => {
      const filtered = items.filter((value) => {
        const { type } = value;
        return type === balanceType;
      });
      if (filtered.length !== 0) {
        return filtered
          .map((value) => value.amount)
          .reduce((prev, curr) => prev + curr);
      } else return 0;
    };

    if (!loading) {
      setIncomeBalance(balanceByType("income"));
      setExpenseBalance(balanceByType("expense"));
    }
  }, [itemList, loading]);

  return (
    <Container>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <Type type={"income"}>Przychody: {incomeBalance} zł </Type>
          <p>Stan konta: {incomeBalance - expenseBalance} zł</p>
          <Type type={"expense"}>Wydatki: {expenseBalance} zł</Type>
        </>
      )}
    </Container>
  );
};

export default AccountStatus;
