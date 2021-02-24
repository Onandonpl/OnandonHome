import React, { useState } from "react";
import styled from "styled-components/macro";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiFillDelete,
  AiFillSignal,
} from "react-icons/ai";
import { IoMdBatteryFull } from "react-icons/io";
import { useObject } from "react-firebase-hooks/database";
import EasyEdit from "react-easy-edit";
import { useAlert } from "react-alert";

import firebase from "../../../../config/firebase";
import {
  updateDeviceName,
  deleteDevice,
} from "../../../../utils/firebase/firebaseFunctions";

import {
  slide_up,
  slide_out_left,
} from "../../../../utils/styledComponents/animations";
import LoadingDevice from "../../../Styled/LoadingDevice";

import Thermometer from "./Thermometer";
import Humidity from "./Humidity";
import WSDCGQ11LMNotExist from "./WSDCGQ11LMNotExist";

const WSDCGQ11LM = ({ type, deviceId, roomId, devicename, friendlyname }) => {
  const [value, loading] = useObject(firebase.database().ref(`${devicename}`));
  const [fadeOut, setFadeOut] = useState(true);
  const alert = useAlert();

  const handleDeleteDevice = () => {
    alert.show(`Usunięto ${devicename}`);
    setFadeOut(!fadeOut);
    const timer = setTimeout(() => {
      deleteDevice(roomId, deviceId);
    }, 250);
    return () => clearTimeout(timer);
  };
  const handleUpdateDeviceName = (value) => {
    alert.show(`Zaaktualizowano ${friendlyname}`);
    updateDeviceName(roomId, deviceId, value);
  };
  const showName = () => {
    alert.show(`${devicename}`);
  };
  if (loading) return <LoadingDevice />;
  if (!value.val() || value.val().model !== type)
    return <WSDCGQ11LMNotExist handleDeleteDevice={handleDeleteDevice} />;

  const {
    battery,
    humidity,
    linkquality,
    pressure,
    temperature,
  } = value.val().state;

  const lqi = ((linkquality - 0) / (255 - 0)) * 100;
  return (
    <WSDCGQ11LMContainer animationState={fadeOut}>
      <Title onClick={showName}>
        <EasyEdit
          type="text"
          value={friendlyname}
          onSave={handleUpdateDeviceName}
          saveButtonLabel={<AiOutlineCheck />}
          cancelButtonLabel={<AiOutlineClose />}
          placeholder="Kliknij żeby edytować"
        />
      </Title>
      <SensorData>
        <Thermometer pressure={pressure} temperature={temperature} />
        <Humidity humidity={humidity} />
      </SensorData>
      <DeleteButton onClick={handleDeleteDevice}>
        <AiFillDelete />
      </DeleteButton>

      <BatteryLevel>
        <IoMdBatteryFull />
        <Battery state={battery} />
      </BatteryLevel>

      <SignalLevel>
        <AiFillSignal />
        <Signal state={lqi} />
      </SignalLevel>
    </WSDCGQ11LMContainer>
  );
};

export default WSDCGQ11LM;
const WSDCGQ11LMContainer = styled.div`
  position: relative;
  min-width: 290px;
  height: 160px;

  margin: 0 10px 20px 10px;
  padding-top: 5px;
  background-color: #f7f7ff;
  border: 1px solid rgba(178, 184, 200, 0.3);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  animation: ${({ animationState }) =>
      animationState === true ? slide_up : slide_out_left}
    0.3s linear;
  animation-iteration-count: 1;
`;
const Title = styled.h4``;
const SensorData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DeleteButton = styled.button`
  position: absolute;
  bottom: 5px;
  right: 5px;

  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: linear 0.1s;
  &:hover {
    scale: 1.1;
  }
  &:focus {
    scale: 1.1;
  }
`;

const BatteryLevel = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Battery = styled.div`
  width: 10px;
  height: 30px;

  border: 1px solid gray;
  background-color: white;
  background-image: linear-gradient(
    to top,
    green ${({ state }) => state}%,
    transparent 15%
  );
`;

const SignalLevel = styled.div`
  position: absolute;
  top: 5px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Signal = styled.div`
  width: 10px;
  height: 30px;

  border: 1px solid gray;
  background-color: white;
  background-image: linear-gradient(
    to top,
    blue ${({ state }) => state}%,
    transparent 15%
  );
`;
