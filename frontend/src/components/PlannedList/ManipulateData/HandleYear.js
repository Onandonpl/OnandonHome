import React, { useState } from "react";
import styled from "styled-components/macro";
import { AiOutlineSearch } from "react-icons/ai";

const HandleYear = ({ setDate, date }) => {
  const [open, setopen] = useState(false);

  const handleYearChange = (event) => {
    const paresdDate = parseInt(event.target.value);
    setDate(paresdDate);
  };

  return (
    <Container open={open}>
      <CollapseButton onClick={() => setopen(!open)}>
        <AiOutlineSearch />
        <p>Wyszukaj</p>
      </CollapseButton>

      <Form open={open}>
        <input
          placeholder="Rok"
          type="number"
          value={date}
          onChange={handleYearChange}
        />
      </Form>
    </Container>
  );
};

export default HandleYear;

const Container = styled.div`
  margin: 5px;
  width: 150px;

  overflow: hidden;
`;

const Form = styled.form`
  display: ${({ open }) => (open ? "flex" : "none")};

  margin: 5px 0;

  input {
    width: 70px;
    padding: 5px;
    border: 2px solid rgb(22, 38, 51);
  }
`;

const CollapseButton = styled.button`
  outline: none;
  background-color: transparent;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover,
  &:focus {
    cursor: pointer;
    border-left: 2px solid black;
  }
`;
