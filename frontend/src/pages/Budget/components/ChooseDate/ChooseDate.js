import React, { useState } from "react";
import { Container } from "./style";
import { useDispatchBudget, useBudget } from "context/BudgetContext";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const ChooseDate = () => {
  const [value, onChange] = useState(new Date());

  const budget = useBudget();
  const dispatch = useDispatchBudget();
  const { itemList } = budget;

  const onClickDay = (date) => {
    const formattedInputDate = date.toLocaleString().split(",")[0];

    const payload = itemList.filter((value) => {
      const { formattedDate } = value.item;
      return formattedDate === formattedInputDate;
    });

    dispatch({ type: "FILTER_BY_DAY", payload: payload });
    onChange(date);
  };

  const onClickMonth = (date) => {
    const formattedInputDate = date.toLocaleString().split(",")[0].split(".");
    const formattedInputMonth = formattedInputDate[1];
    const formattedInputYear = formattedInputDate[2];

    const payload = itemList.filter((value) => {
      const { formattedDate } = value.item;
      const formattedItemtDate = formattedDate.split(".");

      const formattedItemMonth = formattedItemtDate[1];
      const formattedItemYear = formattedItemtDate[2];

      return (
        formattedItemMonth === formattedInputMonth &&
        formattedItemYear === formattedInputYear
      );
    });

    dispatch({ type: "FILTER_BY_MONTH", payload: payload });
    onChange(date);
  };

  const onClickYear = (date) => {
    const formattedInputDate = date.toLocaleString().split(",")[0].split(".");
    const formattedInputYear = formattedInputDate[2];

    const payload = itemList.filter((value) => {
      const { formattedDate } = value.item;
      const formattedItemtDate = formattedDate.split(".");

      const formattedItemYear = formattedItemtDate[2];

      return formattedItemYear === formattedInputYear;
    });

    dispatch({ type: "FILTER_BY_YEAR", payload: payload });
    onChange(date);
  };

  return (
    <Container>
      <p>Wybierz dzień/miesiąc lub rok.</p>
      <Calendar
        value={value}
        onChange={onClickDay}
        onClickMonth={onClickMonth}
        onClickYear={onClickYear}
      />
    </Container>
  );
};

export default ChooseDate;
