import React from "react";
import { Container } from "./style";
const ContainerTitle = ({ text }) => {
  return (
    <Container>
      <p>{text}</p>
    </Container>
  );
};

export default ContainerTitle;
