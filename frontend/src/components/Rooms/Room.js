import React, { useState } from "react";
import styled from "styled-components/macro";
import { AiFillDelete, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import EasyEdit from "react-easy-edit";
import { useAlert } from "react-alert";

import { deleteRoom } from "../../utils/firebase/firebaseFunctions";
import {
  slide_up,
  slide_out_left,
} from "../../utils/styledComponents/animations";
import { updateRoomName } from "../../utils/firebase/firebaseFunctions";

import DeviceList from "../Devices/DeviceList";
import DeviceAdd from "../Devices/DeviceAdd";

const Room = ({ data, roomId }) => {
  const { name } = data;
  const [fadeOut, setFadeOut] = useState(true);
  const alert = useAlert();

  const handleDeleteRoom = () => {
    alert.show("Usunięto pomieszczenie");
    setFadeOut(!fadeOut);
    const timer = setTimeout(() => {
      deleteRoom(roomId);
    }, 250);
    return () => clearTimeout(timer);
  };

  const handleUpdateRoomName = (value) => {
    alert.show(`Zaaktualizowano nazwę ${name}`);
    updateRoomName(roomId, value);
  };

  return (
    <RoomContainer state={fadeOut}>
      <DeviceAdd roomId={roomId} />
      <Title>
        <EasyEdit
          type="text"
          value={name}
          onSave={handleUpdateRoomName}
          saveButtonLabel={<AiOutlineCheck />}
          cancelButtonLabel={<AiOutlineClose />}
        />
      </Title>
      <DeleteButton onClick={handleDeleteRoom}>
        <AiFillDelete />
      </DeleteButton>
      <DeviceList roomId={roomId}></DeviceList>
    </RoomContainer>
  );
};

export default Room;

const RoomContainer = styled.div`
  position: relative;
  min-height: 320px;
  min-width: 300px;
  max-width: 1100px;
  width: 100%;

  padding: 10px;
  margin: 10px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffff;
  border: 1px solid rgba(178, 184, 200, 0.5);
  animation: ${({ state }) => (state === true ? slide_up : slide_out_left)} 0.3s
    linear;
  animation-iteration-count: 1;
  border-radius: 5px;
`;

const Title = styled.h2`
  display: flex;

  margin-bottom: 10px;

  .easy-edit-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;

  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 25px;
  transition: linear 0.1s;

  &:hover {
    scale: 1.1;
  }
  &:focus {
    scale: 1.1;
  }
`;
