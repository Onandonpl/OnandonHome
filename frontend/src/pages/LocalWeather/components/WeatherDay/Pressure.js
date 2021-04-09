import React from "react";
import { CgCompressV } from "react-icons/cg";
import { ParamContainer } from "./style";

const Pressure = ({ pressure }) => {
  return (
    <ParamContainer>
      <p>
        <CgCompressV />
      </p>
      {pressure} hPa
    </ParamContainer>
  );
};

export default Pressure;
