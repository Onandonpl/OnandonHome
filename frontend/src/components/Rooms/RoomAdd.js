import React from "react";
import styled from "styled-components/macro";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import { AiFillFileAdd } from "react-icons/ai";
import { useAlert } from "react-alert";

import { addRoom } from "../../utils/firebase/firebaseFunctions";

const RoomAdd = () => {
  const { register, handleSubmit, reset, errors } = useForm();
  const alert = useAlert();

  const handleAddRoom = (data) => {
    alert.show(`Dodano ${data.room}`);
    addRoom(data.room);
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
        <Form onSubmit={handleSubmit(handleAddRoom)}>
          <Title>Dodaj pomieszczenie</Title>
          <Input
            name="room"
            type="text"
            placeholder="Nazwa pomieszczenia"
            ref={register({
              required: "Pole nazwa pomieszczenia jest wymagane.",
              pattern: {
                message: "Błędna nazwa pomieszczenia.",
              },
            })}
          />
          <ButtonSubmit type="submit" value="Dodaj" />
          {errors.room && <Error>{errors.room.message}</Error>}
        </Form>
      </PopupModal>
    </>
  );
};

export default RoomAdd;
const Form = styled.form`
  position: fixed;
  width: 300px;
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
