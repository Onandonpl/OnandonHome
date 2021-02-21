import React from "react";
import styled from "styled-components/macro";

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={setOpen}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
export default Burger;

const StyledBurger = styled.button`
  position: fixed;
  top: 8px;
  left: 10px;
  z-index: 101;

  width: 2rem;
  height: 2rem;

  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background: transparent;
  border: none;
  cursor: pointer;

  div {
    position: relative;

    width: 2rem;
    height: 0.25rem;

    background: ${({ open }) =>
      open ? "rgb(46, 48, 55)" : "rgb(126, 148, 155)"};
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
