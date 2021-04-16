import React, { useState, useEffect } from "react";
import { AllChart } from "./style";
import { Pie } from "react-chartjs-2";

const AllTransactionsChart = ({ filteredItemsByDate }) => {
  const [incomeBalance, setIncomeBalance] = useState(0);
  const [expenseBalance, setExpenseBalance] = useState(0);
  useEffect(() => {
    const items = filteredItemsByDate.map((item) => {
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

    setIncomeBalance(balanceByType("income"));
    setExpenseBalance(balanceByType("expense"));
  }, [filteredItemsByDate]);

  const data = {
    labels: ["Wydatki", "Przychody"],
    datasets: [
      {
        data: [[expenseBalance], [incomeBalance]],
        backgroundColor: ["rgba(255, 0, 55, 1)", "green"],
        borderColor: ["#ff0037", "green"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    legend: {
      display: true,
    },
  };

  return (
    <AllChart>
      <Pie data={data} options={options} />
    </AllChart>
  );
};

export default AllTransactionsChart;
