import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";

import Category from "./Category";

const CategoriesYear = ({ categories }) => {
  const [date, setDate] = useState(new Date().getFullYear());
  const [categoriesByYear, setCategoriesByYear] = useState([]);
  
  useEffect(() => {
    const filtered = categories.filter((value) => {
      if (value.categoryData.created === date) {
        return value;
      }
    });
    setCategoriesByYear(filtered);
  }, [categories]);

  const handleYearChange = (event) => {
    setDate(parseInt(event.target.value));
    const filtered = categories.filter((value) => {
      if (value.categoryData.created === parseInt(event.target.value)) {
        return value;
      }
    });
    setCategoriesByYear(filtered);
  };

  return (
    <div>
      <form>
        <input type="number" value={date} onChange={handleYearChange} />
      </form>

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
