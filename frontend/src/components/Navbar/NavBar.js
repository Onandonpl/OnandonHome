import React, { useState } from "react";
import styled from "styled-components/macro";
import Burger from "./Burger";
import Menu from "./Menu";
import CC2531 from "../Devices/Device/CC2531/CC2531";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleNavBar = () => setOpen((state) => !state);

  return (
    <NavBarContainer>
      <Burger open={open} setOpen={handleNavBar} />
      <CC2531 />
      <Menu open={open} setOpen={handleNavBar} />
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #1753fc;
`;
