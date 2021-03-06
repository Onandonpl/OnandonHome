import React, { useState } from "react";
import styled from "styled-components/macro";
import "react-calendar/dist/Calendar.css";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";

import { addCategory } from "../../../../utils/firebase/firebaseFunctions";
import ColorPicker from "./ColorPicker";

const CategoryAdd = () => {
  const [color, setColor] = useState("#303f9f");
  const alert = useAlert();
  const { register, handleSubmit, reset } = useForm();

  const handleChange = (color) => {
    setColor(color.hex);
  };

  const handleAddMainCategory = (data) => {
    alert.show(`Dodano ${data.categoryName}`);

    addCategory(data.categoryName, data.type, color);
    reset();
  };

  return (
    <Category>
      <p>Dodaj kategorię</p>
      <Form onSubmit={handleSubmit(handleAddMainCategory)}>
        <Input
          type="text"
          placeholder="nazwa"
          name="categoryName"
          ref={register({ required: true, min: 0 })}
        />
        <Select name="type" ref={register}>
          <option value="mainCategory">Kategoria główna</option>
          <option value="subCategory">Podkategoria</option>
        </Select>
        <ColorPicker color={color} handleChange={handleChange} />
        <ButtonSubmitCategory type="submit" value="+" />
      </Form>
    </Category>
  );
};

export default CategoryAdd;
const Category = styled.div`
  padding: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #161523;
  border-radius: 5px;

  color: white;
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
const ButtonSubmitCategory = styled.input`
  width: 60%;
  margin: 10px 0;

  background-color: #1753fc;

  border: none;
  border-radius: 5px;

  color: white;
  font-size: 24px;
  cursor: pointer;
`;
const Select = styled.select`
  width: 100%;
  margin: 5px;
  padding: 5px;

  border: 2px solid rgb(22, 38, 51);
`;
