import React, { useState } from "react";
import styled from "styled-components/macro";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import { AiFillFileAdd } from "react-icons/ai";
import { useAlert } from "react-alert";

import { addList } from "../../utils/firebase/firebaseFunctions";
import ColorPicker from "./ColorPicker";

const ListAdd = () => {
  const [color, setColor] = useState("#303f9f");
  const { register, handleSubmit, errors, reset } = useForm();
  const alert = useAlert();

  const handleChangeColor = (color) => {
    setColor(color);
  };

  const handleAddList = (data) => {
    const listName = data.listName;
    const listColor = color.hex;

    addList(listName, listColor);
    alert.show(`Dodano ${listName}`);

    reset();
  };

  return (
    <PopupModal
      trigger={
        <TriggerButton>
          <AiFillFileAdd /> <p>Dodaj listę</p>
        </TriggerButton>
      }
      position="bottom center "
    >
      <Form onSubmit={handleSubmit(handleAddList)}>
        <FormTitle>Dodaj listę zakupów</FormTitle>
        <Input
          type="text"
          placeholder="Nazwa Listy"
          name="listName"
          ref={register({
            required: "Pole nazwa listy  jest wymagane.",
          })}
        />
        <ColorPicker color={color} handleChangeColor={handleChangeColor} />
        <ButtonSubmit type="submit" value="Dodaj" />

        {errors.listName && <Error>{errors.listName.message}</Error>}
      </Form>
    </PopupModal>
  );
};

export default ListAdd;
const Form = styled.form`
  position: fixed;

  min-width: 300px;
  padding: 15px;

  z-index: 300;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #161523;
  border-radius: 5px;
  font-size: 35px;
  font-weight: bold;

  transform: translateX(-100%);
`;

const Input = styled.input`
  width: 80%;

  margin: 20px;
  padding: 10px;

  border-radius: 10px;
  border: 2px solid rgb(22, 38, 51);
`;

const ButtonSubmit = styled.input`
  width: 60%;
  padding: 10px;
  margin: 20px 0px;

  border-radius: 10px;
  background-color: #1e655d;
  border: none;
  color: white;
  cursor: pointer;
  transition: linear 0.1s;
  &:hover {
    background-color: rgb(15, 138, 119);
  }
  &:focus {
    background-color: rgb(15, 138, 119);
  }
`;

const TriggerButton = styled.button`
  position: fixed;
  top: 55px;
  right: 0;
  z-index: 300;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
  transition: linear 0.1s;
  p {
    font-size: 15px;
  }
  &:hover {
    scale: 1.1;
  }
  &:focus {
    scale: 1.1;
  }
`;

const PopupModal = styled(Popup)`
  &-arrow {
    color: transparent;
  }
`;

const FormTitle = styled.p`
  color: white;
  font-size: 15px;
`;

const Error = styled.p`
  color: red;
  font-size: 10px;
`;
