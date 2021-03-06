import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Popup from "reactjs-popup";
import { AiOutlineCalendar, AiOutlinePlusCircle } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { BsList } from "react-icons/bs";

import TransactionList from "../TransactionList/TransactionList";
import TransactionAdd from "./AddData/TransactionAdd";
import CategoryAdd from "./AddData/CategoryAdd";

const History = ({ transactionData }) => {
  const [value, onChange] = useState(new Date());
  const [filteredByDate, setFilteredByDate] = useState([]);

  useEffect(() => {
    const convertedDate = value.toLocaleString().split(",")[0];

    const filtered = transactionData.filter((value) => {
      const date = new Date(value.transaction.created.seconds * 1000)
        .toLocaleString()
        .split(",")[0];
      return date === convertedDate ? value : null;
    });

    setFilteredByDate(filtered);
  }, [transactionData]);

  const onClickDate = (date) => {
    const convertedDate = date.toLocaleString().split(",")[0];

    const filtered = transactionData.filter((value) => {
      const date = new Date(value.transaction.created.seconds * 1000)
        .toLocaleString()
        .split(",")[0];

      return date === convertedDate ? value : null;
    });

    setFilteredByDate(filtered);
    onChange(date);
  };

  const onClickMonth = (date) => {
    const convertedDate = date.toLocaleString().split(",")[0].split(".");

    const filtered = transactionData.filter((value) => {
      const month = new Date(value.transaction.created.seconds * 1000)
        .toLocaleString()
        .split(",")[0]
        .split(".")[1];
      const year = new Date(value.transaction.created.seconds * 1000)
        .toLocaleString()
        .split(",")[0]
        .split(".")[2];

      return month === convertedDate[1] && year === convertedDate[2]
        ? value
        : null;
    });
    setFilteredByDate(filtered);
    onChange(date);
  };

  const onClickYear = (date) => {
    const convertedDate = date.toLocaleString().split(",")[0].split(".");

    const filtered = transactionData.filter((value) => {
      const year = new Date(value.transaction.created.seconds * 1000)
        .toLocaleString()
        .split(",")[0]
        .split(".")[2];

      return year === convertedDate[2] ? value : null;
    });
    setFilteredByDate(filtered);
    onChange(date);
  };

  const getAll = () => {
    setFilteredByDate(transactionData);
  };

  return (
    <HistoryContainer>
      <Menu>
        <Popup
          trigger={
            <TriggerButton>
              <AiOutlinePlusCircle />
              <p>Dodaj transakcje</p>
            </TriggerButton>
          }
          modal
        >
          <TransactionAdd />
        </Popup>
        <Popup
          trigger={
            <TriggerButton>
              <GrAdd /> <p>Dodaj Kategorię</p>
            </TriggerButton>
          }
          modal
        >
          <CategoryAdd />
        </Popup>
        <Popup
          trigger={
            <TriggerButton>
              <AiOutlineCalendar />
              <p>Wybierz dzień</p>
            </TriggerButton>
          }
          modal
        >
          <Calendar
            value={value}
            onChange={onClickDate}
            onClickMonth={onClickMonth}
            onClickYear={onClickYear}
          />
        </Popup>
        <TriggerButton onClick={getAll}>
          <BsList />
          <p>Pokaż wszystko</p>
        </TriggerButton>
      </Menu>

      <TransactionList filteredByDate={filteredByDate} />
    </HistoryContainer>
  );
};

export default History;
const HistoryContainer = styled.div`
  padding: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;

  display: flex;
  flex-wrap: wrap;

  background-color: #f5f6f8;
`;

const TriggerButton = styled.button`
  width: 100px;
  margin: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  font-size: 30px;
  cursor: pointer;

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
