import React, { useState } from "react";

import {
  Input,
  InputContainer,
  FormError,
  Form,
  Submit,
  FormContainer,
  Select,
} from "./style";
import { useDispatchBudget } from "context/BudgetContext";

import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const AddItemForm = () => {
  const [value, onChange] = useState(new Date());

  const dispatch = useDispatchBudget();

  const alert = useAlert();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { name, amount, category, type } = data;
    const formattedDate = value.toLocaleString().split(",")[0];

    const payload = {
      name: name,
      amount: parseFloat(amount),
      category: category,
      type: type,
      created: value,
      formattedDate: formattedDate,
    };

    dispatch({
      type: "ADD_ITEM",
      payload: payload,
    });
    reset();
    alert.show("Dodano transakcje.");
  };

  return (
    <FormContainer>
      <Calendar value={value} onChange={onChange} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Input
            type="text"
            placeholder={"Nazwa"}
            {...register("name", { required: true })}
          />
          {errors.name && <FormError>Nazwa jest wymagana.</FormError>}
        </InputContainer>
        <InputContainer>
          <Input
            type="number"
            step="0.1"
            placeholder={"Kwota"}
            {...register("amount", { required: true })}
          />
          {errors.amount && <FormError>Kwota jest wymagana.</FormError>}
        </InputContainer>
        <Select name="type" {...register("type")}>
          <option value="income">Przychód</option>
          <option value="expense">Wydatek</option>
        </Select>
        <Select name="category" {...register("category")}>
          <option value="woda">Woda</option>
          <option value="prąd">Prąd</option>
          <option value="gaz">Gaz</option>
          <option value="gaz">Wypłata</option>
        </Select>
        <Submit type="submit">Dodaj</Submit>
      </Form>
    </FormContainer>
  );
};

export default AddItemForm;
