import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components/macro";

const MainCategoryChart = ({ filteredByType, categories }) => {
  const filteredByCategory = categories.docs.map((value) => value);

  const filtered = filteredByCategory.filter((value) => {
    console.log(value.data());
    return value.data().categoryType === "mainCategory" ? value.data : null;
  });

  const chartData = filtered.map((categoryValue) => ({
    key: categoryValue.data().categoryName,
    color: categoryValue.data().color,
    value: filteredByType.filter((value) =>
      value.transaction.mainCategory === categoryValue.data().categoryName
        ? value
        : null
    ),
  }));

  const data = {
    labels: chartData.map((value) => value.key),
    datasets: [
      {
        data: chartData.map((value) =>
          value.value.length !== 0
            ? -value.value
                .map((value) => value.transaction.amount)
                .reduce((prev, curr) => prev + curr)
            : null
        ),
        backgroundColor: chartData.map((value) => value.color),
        borderColor: chartData.map((value) => value.color),
        borderWidth: 1,
      },
    ],
  };
  const options = {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            display: true,
            fontColor: "black",
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
          },
          ticks: {
            fontColor: "#000000",
            stepSize: 500,
          },
          gridLines: {
            color: "#000000",
          },
        },
      ],
    },
  };
  return (
    <Chart>
      <Bar data={data} options={options} />
    </Chart>
  );
};

export default MainCategoryChart;
const Chart = styled.div`
  width: 100%;
  height: 100%;
  max-height: 1000px;
  max-width: 1000px;
`;
