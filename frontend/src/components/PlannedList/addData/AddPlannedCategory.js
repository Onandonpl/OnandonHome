import React from "react";
import styled from "styled-components/macro";
import "react-calendar/dist/Calendar.css";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";

import { addPlannedCategory } from "../../../utils/firebase/firebaseFunctions";

const AddPlannedCategory = () => {
  const alert = useAlert();
  const { register, handleSubmit, reset } = useForm();

  const handleAddPlannedCategory = (data) => {
    alert.show(`Dodano ${data.plannedCategory}`);
    addPlannedCategory(data.plannedCategory, parseInt(data.year));
    reset();
  };

  return (
    <AddPlannedCategoryContainer>
      Dodaj Kategorie
      <Form onSubmit={handleSubmit(handleAddPlannedCategory)}>
        <Input
          type="number"
          placeholder="Rok"
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
    </AddPlannedCategoryContainer>
  );
};

export default AddPlannedCategory;
const AddPlannedCategoryContainer = styled.div`
  padding: 5px;
  background-color: #f1f1ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;

  display: flex;
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
