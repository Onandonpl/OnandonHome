import React from "react";
import styled from "styled-components/macro";

const Month = ({ monthId, monthName, expenses }) => {
  console.log(expenses.map((value) => value.name));
  return <MonthContainer>{expenses.map((value) => value.name)}</MonthContainer>;
};

export default Month;

const MonthContainer = styled.div`
  display: flex;
  margin: 5px;
  height: 50px;
  width: 150px;
  background-color: red;
`;
