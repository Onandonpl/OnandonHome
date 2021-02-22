import React from "react";
import styled from "styled-components/macro";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiMoney } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={setOpen}>
      <NavLink to="/">
        <AiOutlineHome />
        <LinktText>Home</LinktText>
      </NavLink>
      <NavLink to="/shoppinglist">
        <AiOutlineShoppingCart />
        <LinktText>Lista zakupów</LinktText>
      </NavLink>
      <NavLink to="/plannedexpenses">
        <AiOutlineShoppingCart />
        <LinktText>Planowane wydatki</LinktText>
      </NavLink>
      <NavLink to="/expenses">
        <BiMoney />
        <LinktText>Wydatki</LinktText>
      </NavLink>

      <NavLink to="/weather">
        <FiSun />
        <LinktText>Pogoda</LinktText>
      </NavLink>
    </StyledMenu>
  );
};
export default Menu;
const StyledMenu = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  height: 100%;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: rgb(239, 241, 245);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  transition: transform 0.3s ease-in-out;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: 576px) {
    width: 100%;
  }
`;
const NavLink = styled(Link)`
  width: 100%;

  margin: 15px 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  text-decoration: none;
  font-size: 25px;
  color: rgb(46, 48, 55);
  transition: linear 0.1s;

  &:hover {
    color: rgb(0, 153, 70);
  }
  &:focus {
    color: rgb(0, 153, 70);
  }
`;
const LinktText = styled.div`
  margin: 0 5px;
`;
