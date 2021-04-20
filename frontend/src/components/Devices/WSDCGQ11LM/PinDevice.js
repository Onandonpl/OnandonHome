import React from "react";
import { PinDeviceButton } from "./style";
import { useDispatchHomeDevices } from "context/HomeDevicesContext";
import { AiFillPushpin } from "react-icons/ai";
const PinDevice = ({ item }) => {
  const { deviceId, deviceName, deviceType } = item;
  const dispatch = useDispatchHomeDevices();

  const handlePinDevice = () => {
    const payload = {
      deviceId: deviceId,
      deviceName: deviceName,
      deviceType: deviceType,
    };
    dispatch({ type: "ADD_ITEM", payload: payload });
  };

  return (
    <PinDeviceButton onClick={handlePinDevice}>
      <AiFillPushpin />
    </PinDeviceButton>
  );
};

export default PinDevice;
