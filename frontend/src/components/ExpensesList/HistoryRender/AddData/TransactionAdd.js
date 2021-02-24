import React, { useState } from "react";
import styled from "styled-components/macro";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";
import { useCollection } from "react-firebase-hooks/firestore";

import firebase from "../../../../config/firebase";
import { addTransaction } from "../../../../utils/firebase/firebaseFunctions";

const TransactionAdd = () => {
  const alert = useAlert();
  const [value, onChange] = useState(new Date());
  const { register, handleSubmit, reset } = useForm();
  const [categories, loading] = useCollection(
    firebase.firestore().collection("categories").orderBy("created", "asc")
  );

  if (loading) return <> </>;

  const filteredByCategory = categories.docs.map((value) => value);

  const selectCategories = (type) => {
    const filtered = filteredByCategory.filter((value) =>
      value.data().categoryType === type ? value : null
    );
    return filtered.map((value) => (
      <option key={value.id} value={value.data().categoryName}>
        {value.data().categoryName}
      </option>
    ));
  };

  const handleAddTransaction = (data) => {
    alert.show(`Dodano ${data.transaction}`);
    const time = new Date().toLocaleString().split(",")[1];
    const convertAmount =
      data.type === "expense" ? parseInt(-data.amount) : parseInt(data.amount);
    addTransaction(
      data.transaction,
      data.type,
      convertAmount,
      data.mainCategory,
      data.subCategory,
      value,
      time
    );
    reset();
  };

  return (
    <TransactionAddContainer>
      <p>Dodaj transakcje </p>
      <Calendar value={value} onChange={onChange} />
      <Form onSubmit={handleSubmit(handleAddTransaction)}>
        <Input
          type="text"
          placeholder="Nazwa"
          name="transaction"
          ref={register({ required: true, min: 1 })}
        />
        <Input
          type="number"
          placeholder="Kwota"
          name="amount"
          ref={register({ required: true, min: 0 })}
        />
        <Select name="type" ref={register}>
          <option value="expense">Wydatek</option>
          <option value="income">Przychód</option>
        </Select>
        <Select name="mainCategory" ref={register}>
          {selectCategories("mainCategory")}
        </Select>
        <Select name="subCategory" ref={register}>
          {selectCategories("subCategory")}
        </Select>
        <ButtonSubmit type="submit" value="+" />
      </Form>
    </TransactionAddContainer>
  );
};

export default TransactionAdd;
const TransactionAddContainer = styled.div`
  padding: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #161523;

  border-radius: 5px;

  p {
    color: white;
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
  width: 60%;
  margin: 10px 0;

  background-color: #1753fc;

  border: none;
  border-radius: 5px;

  color: white;
  font-size: 24px;
  cursor: pointer;
`;
