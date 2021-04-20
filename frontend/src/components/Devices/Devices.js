import React from "react";
import {Container } from "./style"
import devicesSwitch from "./DevicesSwitch/devicesSwitch";
const Devices = ({ itemList, room }) => {
  return (
    <Container>
      {itemList.map((item) => {
        return devicesSwitch(item, room);
      })}
    </Container>
  );
};

export default Devices;
