import React, { useState } from "react";
import { ButtonsContainer, MenuContainer, Button } from "./style";
import { useDispatchBudget } from "context/BudgetContext";

import MenuOptions from "../MenuOptions/MenuOptions";
const BudgetMenu = () => {
  const dispatch = useDispatchBudget();
  const [option, setOption] = useState("hide");

  const showAll = () => {
    dispatch({ type: "SHOW_ALL" });
  };
  const handleOption = (type) => {
    setOption(type);
  };
  return (
    <MenuContainer>
      <ButtonsContainer>
        <Button onClick={() => handleOption("day")}>
          <p>Wybierz dzień</p>
        </Button>
        <Button onClick={showAll}>
          <p>Wszystkie transakcje</p>
        </Button>
        <Button onClick={() => handleOption("add")}>
          <p>Dodaj transakcje</p>
        </Button>
        <Button onClick={() => handleOption("hide")}>
          <p>Schowaj</p>
        </Button>
      </ButtonsContainer>
      <MenuOptions type={option} />
    </MenuContainer>
  );
};

export default BudgetMenu;
