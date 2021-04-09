import React from "react";
import { AiOutlineCloud } from "react-icons/ai";
import { ParamContainer } from "./style";

const Clouds = ({ clouds }) => {
  return (
    <ParamContainer>
      <p>
        <AiOutlineCloud />
      </p>
      {clouds} %
    </ParamContainer>
  );
};

export default Clouds;
