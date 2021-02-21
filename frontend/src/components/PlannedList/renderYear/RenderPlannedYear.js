import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Popup from "reactjs-popup";
import { AiOutlineCalendar, AiOutlinePlusCircle } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { BsList } from "react-icons/bs";
import YearInfo from "./YearInfo";
const RenderPlannedYear = ({ plannedData }) => {
  const [value, onChange] = useState(new Date());
  const [planned, setPlanned] = useState([]);

  useEffect(() => {
    const convertedDate = value.getFullYear();

    const filtered = plannedData.filter((value) => {
      return value.plannedYear.created === convertedDate ? value : null;
    });
    setPlanned(filtered);
  }, [plannedData]);

  const onClickYear = (date) => {
    const convertedDate = date.getFullYear();

    const filtered = plannedData.filter((value) => {
      return value.plannedYear.created === convertedDate ? value : null;
    });
    setPlanned(filtered);
  };
  return (
    <div>
      <Calendar
        value={value}
        onClickYear={onClickYear}
        defaultView={"decade"}
      />
      {planned.map((value) => (
        <YearInfo
          key={value.id}
          categoryName={value.plannedYear.categoryName}
          yearId={value.id}
        />
      ))}
    </div>
  );
};

export default RenderPlannedYear;
