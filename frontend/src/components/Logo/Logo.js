import React from "react";
import { Container } from "./style";
import LogoSvg from "./components/logo.svg";
const Logo = () => {
  return (
    <Container>
      <img src={LogoSvg} alt="" />
    </Container>
  );
};

export default Logo;
