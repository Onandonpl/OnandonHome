import React from "react";
import {
  Container,
  ProductName,
  ProductOptions,
  ProductQuantity,
} from "./style";

const Basic = () => {
  return (
    <Container>
      <ProductName>Nazwa produktu</ProductName>
      <ProductQuantity>Ilość</ProductQuantity>
      <ProductOptions>Opcje</ProductOptions>
    </Container>
  );
};

export default Basic;
