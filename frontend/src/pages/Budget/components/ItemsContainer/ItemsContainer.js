import React, { useState, useEffect } from "react";
import { useBudget } from "context/BudgetContext";

import FilterButtons from "../FilterButtons/FilterButtons";

import { renderByOption } from "./renderByOption";

const ItemsContainer = () => {
  const budget = useBudget();
  const { filter } = budget;

  const [option, setOption] = useState("all");
  const [filteredByOption, setFilteredByOption] = useState(filter);

  useEffect(() => {
    if (option === "income" || option === "expense") {
      const filtered = filter.filter((value) => {
        const { type } = value.item;
        return type === option;
      });
      setFilteredByOption(filtered);
    } else {
      setFilteredByOption(filter);
    }
  }, [option, filter]);

  return (
    <>
      <FilterButtons setOption={setOption} />
      {renderByOption(option, filteredByOption)}
    </>
  );
};

export default ItemsContainer;
