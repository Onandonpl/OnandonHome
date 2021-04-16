import React from "react";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";
import { Input, InputContainer, FormError, Form, Label, Submit } from "./style";
const OptionForm = ({ dispatch }) => {
  const alert = useAlert();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { name } = data;

    const payload = {
      budgetCategoryName: name,
    };

    dispatch({
      type: "ADD_BUDGET_CATEGORY",
      payload: payload,
    });

    reset();
    alert.show("Dodano kategorię.");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>Dodaj kategorię</label>
      <InputContainer>
        <Label>Nazwa kategorii</Label>
        <Input type="text" {...register("name", { required: true })} />
        {errors.name && <FormError>Nazwa jest wymagana.</FormError>}
      </InputContainer>

      <Submit type="submit">Dodaj</Submit>
    </Form>
  );
};

export default OptionForm;
