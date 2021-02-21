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

  const handleChange = (color) => {
    setColor(color);
  };

  const { register, handleSubmit, errors, reset } = useForm();
  const alert = useAlert();

  const handleAddList = (data) => {
    alert.show(`Dodano ${data.product}`);
    addList(data.product, color.hex);
    reset();
  };

  return (
    <>
      <PopupModal
        trigger={
          <TriggerButton>
            <AiFillFileAdd />
          </TriggerButton>
        }
        position="bottom center "
      >
        <Form onSubmit={handleSubmit(handleAddList)}>
          <Title>Dodaj listę zakupów</Title>
          <Input
            type="text"
            placeholder="Lista"
            name="product"
            ref={register({
              required: "Pole lista  jest wymagane.",
              pattern: {
                message: "Błędna nazwa listy.",
              },
            })}
          />
          <ColorPicker color={color} handleChange={handleChange} />
          <ButtonSubmit type="submit" value="Dodaj" />{" "}
          {errors.product && <Error>{errors.product.message}</Error>}
        </Form>
      </PopupModal>
    </>
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
  margin-top: 20px;

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
  top: 0;
  right: 10px;
  z-index: 300;

  width: 50px;
  height: 50px;

  background-color: transparent;
  border: none;
  font-size: 50px;
  cursor: pointer;
  transition: linear 0.1s;

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

const Title = styled.p`
  color: white;
  font-size: 15px;
`;
const Error = styled.p`
  color: red;
  font-size: 10px;
`;
