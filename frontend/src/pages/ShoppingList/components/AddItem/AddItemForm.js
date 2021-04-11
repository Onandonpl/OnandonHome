import React from "react";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";
import { Input, InputContainer, FormError, Form, Submit } from "./style";
import { useDispatchShopping } from "context/ShoppingContext";
const AddForm = () => {
  const dispatch = useDispatchShopping();
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
      name: name,
      qty: 1,
    };

    dispatch({
      type: "ADD_ITEM",
      payload: payload,
    });
    reset();
    alert.show("Dodano przedmiot.");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Input
          type="text"
          placeholder={"Nazwa"}
          {...register("name", { required: true })}
        />
        {errors.name && <FormError>Nazwa jest wymagana.</FormError>}
      </InputContainer>
      <Submit type="submit">Dodaj</Submit>
    </Form>
  );
};

export default AddForm;
