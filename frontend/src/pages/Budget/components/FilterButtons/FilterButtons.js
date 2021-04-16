import React from "react";
import { Container, Button } from "./style";
const FilterButtons = ({ setOption }) => {
  
  const handleOption = (option) => {
    setOption(option);
  };

  return (
    <Container>
      <Button color={"#2ea449"} onClick={() => handleOption("income")}>
        <p>Przychody</p>
      </Button>
      <Button color={"#d93542"} onClick={() => handleOption("expense")}>
        <p>Wydatki</p>
      </Button>
      <Button onClick={() => handleOption("all")}>
        <p>Wszystko</p>
      </Button>
    </Container>
  );
};

export default FilterButtons;
