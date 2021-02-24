import React, { useState, useEffect } from "react";

import Category from "./Category/Category";

const RenderCategoriesByYear = ({ formattedCategories, year }) => {
  const [categoriesByYear, setCategoriesByYear] = useState(formattedCategories);

  useEffect(() => {
    const filtered = formattedCategories.filter(
      (value) => value.categoryData.created === year
    );

    setCategoriesByYear(filtered);
  }, [formattedCategories, year]);

  return (
    <>
      {categoriesByYear.map((value) => (
        <Category
          key={value.categoryId}
          categoryName={value.categoryData.categoryName}
          categoryId={value.categoryId}
        />
      ))}
    </>
  );
};

export default RenderCategoriesByYear;
