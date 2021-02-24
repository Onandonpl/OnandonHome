import React, { useState } from "react";
import styled from "styled-components/macro";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";

import { addPlannedExpense } from "../../../utils/firebase/firebaseFunctions";

const AddPlannedExpense = ({ categoryId, monthId }) => {
  const alert = useAlert();
  const [value, onChange] = useState(new Date());
  const { register, handleSubmit, reset } = useForm();
  console.log(value);
  const handleAddTransaction = (data) => {
    const timeWhenAdded = new Date().toLocaleString().split(",")[1];
    const convertAmount = parseInt(-data.amount);
    addPlannedExpense(
      false,
      categoryId,
      monthId,
      data.expense,
      convertAmount,
      value,
      timeWhenAdded
    );

    alert.show(`Dodano ${data.expense}`);

    reset();
  };

  return (
    <TransactionAddContainer>
      <p>Dodaj planowany wydatek</p>

      <Calendar value={value} onChange={onChange} />
      <Form onSubmit={handleSubmit(handleAddTransaction)}>
        <Input
          type="text"
          placeholder="Nazwa"
          name="expense"
          ref={register({ required: true, min: 1 })}
        />
        <Input
          type="number"
          placeholder="Kwota"
          name="amount"
          ref={register({ required: true, min: 0 })}
        />
        <ButtonSubmit type="submit" value="+" />
      </Form>
    </TransactionAddContainer>
  );
};

export default AddPlannedExpense;

const TransactionAddContainer = styled.div`
  padding: 10px;
  background-color: #161523;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  p {
    color: white;
    padding-bottom: 2px;
  }
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
