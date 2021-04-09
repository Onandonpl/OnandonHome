import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Container } from "./style";
const HideRevealButton = ({ hide, handleHide }) => {
  return (
    <Container onClick={handleHide}>
      {!hide ? <BsArrowRight /> : <BsArrowLeft />}
    </Container>
  );
};

export default HideRevealButton;
