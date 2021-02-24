import React, { useState } from "react";
import styled from "styled-components/macro";
import {
  AiOutlineInfoCircle,
  AiOutlineCheck,
  AiOutlineClose,
  AiFillDelete,
} from "react-icons/ai";
import Popup from "reactjs-popup";
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

import GosundButton from "./GosundButton";
import GosundBasicInfo from "./GosundBasicInfo";
import GosundInfo from "./GosundInfo";
import GosundNotExist from "./GosundNotExist";

const GosundPlug = ({ type, deviceId, roomId, devicename, friendlyname }) => {
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
  const showName = () => {
    alert.show(`${devicename}`);
  };
  if (loading) return <LoadingDevice />;
  if (!value.val() || value.val().model !== type)
    return <GosundNotExist handleDeleteDevice={handleDeleteDevice} />;

  const { name, power, deviceSensor, state } = value.val();

  const handleUpdateDeviceName = (value) => {
    updateDeviceName(roomId, deviceId, value);
    alert.show(`Zaaktualizowano ${friendlyname}`);
  };

  return (
    <Gosund animationState={fadeOut}>
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
      <PopupModal
        trigger={
          <InformationButton>
            <AiOutlineInfoCircle />
          </InformationButton>
        }
        position="left center"
        modal
        nested
      >
        {(close) => <GosundInfo data={value.val()} close={close} />}
      </PopupModal>
      <GosundContent>
        <GosundButton power={power} name={name} />
        <GosundBasicInfo
          status={state}
          powerstatus={power}
          data={deviceSensor}
        ></GosundBasicInfo>
      </GosundContent>
      <DeleteButton onClick={handleDeleteDevice}>
        <AiFillDelete />
      </DeleteButton>
    </Gosund>
  );
};

export default GosundPlug;
const Gosund = styled.div`
  position: relative;

  min-width: 290px;
  height: 160px;

  margin: 0 10px 20px 10px;
  padding: 5px 15px 15px 15px;

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
const GosundContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h4``;
const PopupModal = styled(Popup)`
  &-arrow {
    color: transparent;
  }
`;
const InformationButton = styled.button`
  position: absolute;
  bottom: 5px;
  left: 5px;

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
