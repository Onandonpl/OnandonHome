import React from "react";
import styled from "styled-components/macro";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import { AiFillPlusCircle } from "react-icons/ai";
import { useAlert } from "react-alert";

import { addDevice } from "../../utils/firebase/firebaseFunctions";

const DeviceAdd = ({ roomId }) => {
  const { register, handleSubmit, reset, errors } = useForm();
  const alert = useAlert();

  const handleAddDevice = (data) => {
    alert.show(`Dodano ${data.name}`);
    addDevice(roomId, data.name, data.friendlyname, data.type);
    reset();
  };
  return (
    <>
      <PopupModal
        trigger={
          <TriggerButton>
            <AiFillPlusCircle />
          </TriggerButton>
        }
        position="bottom center "
      >
        <Form onSubmit={handleSubmit(handleAddDevice)}>
          <Title>Dodaj Urządzenie</Title>
          <Input
            name="name"
            type="text"
            placeholder="Nazwa urządzenia"
            ref={register({
              required: "Pole nazwa urządzenia jest wymagane.",
              pattern: {
                message: "Błędna nazwa urządzenia.",
              },
            })}
          />
          <Input
            name="friendlyname"
            type="text"
            placeholder="Nazwa wyświetlana"
            ref={register({
              required: "Pole nazwa wyświetlana jest wymagane.",
              pattern: {
                message: "Błędna nazwa wyświetlana.",
              },
            })}
          />
          <select name="type" ref={register}>
            <option value="gosundPlug">GOSUNDPLUG</option>
            <option value="TS0505A">TS0505A</option>
            <option value="WSDCGQ11LM">WSDCGQ11LM</option>{" "}
            <option value="HG06106A">HG06106A</option>
          </select>
          <ButtonSubmit type="submit" value="Dodaj Urządzenie"></ButtonSubmit>
          {errors.name && <Error>{errors.name.message}</Error>}{" "}
          {errors.friendlyname && <Error>{errors.friendlyname.message}</Error>}
        </Form>
      </PopupModal>
    </>
  );
};

export default DeviceAdd;
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
  padding: 10px;
  border-radius: 10px;
  border: 2px solid rgb(22, 38, 51);
  margin: 10px;
`;

const ButtonSubmit = styled.input`
  width: 60%;
  padding: 10px;
  margin-top: 10px;
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
  position: absolute;
  top: 5px;
  right: 40px;

  width: 15px;
  height: 15px;

  background-color: transparent;
  border: none;
  font-size: 25px;
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
