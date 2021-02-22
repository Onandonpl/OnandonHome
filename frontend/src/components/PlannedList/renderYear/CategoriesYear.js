import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Category from "./Category";

const CategoriesYear = ({ categories }) => {
  const [value, onChange] = useState(new Date());
  const [categoriesByYear, setCategoriesByYear] = useState([]);

  useEffect(() => {
    const convertedDate = value.getFullYear();

    const filtered = categories.filter((value) => {
      if (value.categoryData.created === convertedDate) {
        return value;
      }
    });
    setCategoriesByYear(filtered);
  }, [categories]);

  const onClickYear = (date) => {
    const convertedDate = date.getFullYear();

    const filtered = categories.filter((value) => {
      if (value.categoryData.created === convertedDate) {
        return value;
      }
    });
    setCategoriesByYear(filtered);
  };

  return (
    <div>
      <Calendar
        value={value}
        onClickYear={onClickYear}
        defaultView={"decade"}
      />
      {categoriesByYear.map((value) => (
        <Category
          key={value.categoryId}
          categoryName={value.categoryData.categoryName}
          categoryId={value.categoryId}
        />
      ))}
    </div>
  );
};

export default CategoriesYear;
