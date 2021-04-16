import React, { useState, useEffect } from "react";
import { ExpensesChartContainer } from "./style";
import { Bar } from "react-chartjs-2";

const ExpensesChart = ({ filteredItemsByDate }) => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const items = filteredItemsByDate.map((item) => {
      return item.item;
    });

    const chartData = Array.from(
      items.reduce((total, { category, amount }) => {
        return total.set(category, (total.get(category) || 0) + amount);
      }, new Map()),
      ([category, amount]) => ({ category, amount })
    );
    setChartData(chartData);
  }, [filteredItemsByDate]);
  const data = {
    labels: chartData.map((item) => item.category),
    datasets: [
      {
        data: chartData.map((item) => item.amount),
        backgroundColor: ["rgba(255, 0, 55, 1)", "green"],
        borderColor: ["#ff0037", "green"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
  };

  return (
    <ExpensesChartContainer>
      <Bar data={data} options={options} />
    </ExpensesChartContainer>
  );
};

export default ExpensesChart;
