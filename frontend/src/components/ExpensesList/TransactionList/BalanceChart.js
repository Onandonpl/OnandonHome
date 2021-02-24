import React from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components/macro";

const BalanceChart = ({ expense, income }) => {
  const data = {
    labels: ["Wydatki", "Przychody"],
    datasets: [
      {
        data: [[expense], [income]],
        backgroundColor: ["rgba(255, 0, 55, 1)", "green"],
        borderColor: ["#ff0037", "green"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Chart>
      <Pie
        data={data}
        options={{
          legend: {
            display: true,
          },
        }}
      />
    </Chart>
  );
};

export default BalanceChart;
const Chart = styled.div``;
