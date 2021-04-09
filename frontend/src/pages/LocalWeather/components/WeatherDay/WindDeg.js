import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { ParamContainer, Deg } from "./style";

const WindDeg = ({ windDeg }) => {
  const deg = `${windDeg}deg`;
  return (
    <ParamContainer>
      <Deg windDeg={deg}>
        <BsArrowRight />
      </Deg>
      kierunek
    </ParamContainer>
  );
};

export default WindDeg;
