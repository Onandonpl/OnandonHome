import React from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet";
import MyCalendar from "../components/Calendar/MyCalendar";

const BigCalendar = () => {
  return (
    <BigCalendarContainer>
      <Helmet>
        <title>Kalendarz</title>
      </Helmet>
      <MyCalendar />
    </BigCalendarContainer>
  );
};

export default BigCalendar;
const BigCalendarContainer = styled.div`
  min-height: calc(100vh - 50px);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #f1f1ff;
`;
