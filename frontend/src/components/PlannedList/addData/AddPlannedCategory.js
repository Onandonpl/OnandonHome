import React, { useState } from "react";
import styled from "styled-components/macro";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";
import { useCollection } from "react-firebase-hooks/firestore";

import firebase from "../../../config/firebase";
import { addPlannedCategory } from "../../../utils/firebase/firebaseFunctions";

const AddPlannedCategory = () => {
  const alert = useAlert();
  const [value, onChange] = useState(new Date());
  const [dates, setDates] = useState(new Date());
  const { register, handleSubmit, reset } = useForm();

  const handleAddPlannedCategory = (data) => {
    alert.show(`Dodano ${data.transaction}`);
    const created = dates.getFullYear();
    addPlannedCategory(data.transaction, created);
    reset();
  };
  const onClickYear = (date) => {
    setDates(date);
  };
  return (
    <AddPlannedCategoryContainer>
      Dodaj transakcje
      <Calendar value={value} onClickYear={onClickYear} />
      <Form onSubmit={handleSubmit(handleAddPlannedCategory)}>
        <Input
          type="text"
          placeholder="Nazwa"
          name="transaction"
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

const Select = styled.select`
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
