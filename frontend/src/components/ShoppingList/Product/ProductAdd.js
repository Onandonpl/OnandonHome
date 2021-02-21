import React from "react";
import styled from "styled-components/macro";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";

import { addProduct } from "../../../utils/firebase/firebaseFunctions";

const ProductAdd = ({ listId, listColor }) => {
  const alert = useAlert();
  const { register, handleSubmit, reset } = useForm();

  const handleAddProduct = (data) => {
    alert.show(`Dodano ${data.product}`);
    addProduct(listId, data.product, listColor);
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handleAddProduct)}>
        <Input
          type="text"
          placeholder="Produkt"
          name="product"
          ref={register({ required: true, min: 1 })}
        />
        <ButtonSubmit type="submit" value="+" props={listColor} />
      </Form>
    </>
  );
};

export default ProductAdd;

const Form = styled.form`
  width: 300px;
  padding: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  font-size: 35px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 80%;

  margin: 5px;
  padding: 5px;

  border: 2px solid rgb(22, 38, 51);
`;

const ButtonSubmit = styled.input`
  width: 10%;

  background-color: ${({ props }) => props};
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;
