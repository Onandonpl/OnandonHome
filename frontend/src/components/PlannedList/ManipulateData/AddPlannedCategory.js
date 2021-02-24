import React, { useState } from "react";
import styled from "styled-components/macro";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { addPlannedCategory } from "../../../utils/firebase/firebaseFunctions";

const AddPlannedCategory = ({ date }) => {
  const [open, setopen] = useState(false);

  const alert = useAlert();
  const { register, handleSubmit, reset } = useForm();

  const handleAddPlannedCategory = (data) => {
    addPlannedCategory(data.plannedCategory, parseInt(data.year));
    alert.show(`Dodano ${data.plannedCategory}`);

    reset();
  };
  return (
    <Container open={open}>
      <CollapseButton onClick={() => setopen(!open)}>
        <AiOutlinePlusCircle />
        <p>Dodaj Kategorię</p>
      </CollapseButton>

      <Form open={open} onSubmit={handleSubmit(handleAddPlannedCategory)}>
        <Input
          type="number"
          placeholder="Rok"
          value={date}
          name="year"
          ref={register({ required: true, min: 1 })}
        />
        <Input
          type="text"
          placeholder="Nazwa Kategorii"
          name="plannedCategory"
          ref={register({ required: true, min: 1 })}
        />
        <ButtonSubmit type="submit" value="+" />
      </Form>
    </Container>
  );
};

export default AddPlannedCategory;
const Container = styled.div`
  margin: 5px;
  width: 150px;

  overflow: hidden;
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

const Form = styled.form`
  display: ${({ open }) => (open ? "flex" : "none")};

  width: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 35px;
`;

const Input = styled.input`
  width: 100%;

  margin: 5px;
  padding: 5px;

  border: 2px solid rgb(22, 38, 51);
`;

const ButtonSubmit = styled.input`
  width: 80%;
  border-radius: 5px;
  background-color: #1753fc;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;
