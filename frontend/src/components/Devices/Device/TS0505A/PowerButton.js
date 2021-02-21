import React from "react";
import styled from "styled-components/macro";
import client from "../../../../config/mqttConnect";
import { AiOutlinePoweroff } from "react-icons/ai";
const PowerButton = ({ state, devicename }) => {
  const handlePower = () => {
    state === "OFF"
      ? client.publish(
          `zigbee2mqtt/${devicename}/set`,
          JSON.stringify({ state: "ON" })
        )
      : client.publish(
          `zigbee2mqtt/${devicename}/set`,
          JSON.stringify({ state: "OFF" })
        );
  };

  return (
    <Power power={state}>
      <AiOutlinePoweroff onClick={handlePower} />
    </Power>
  );
};

export default PowerButton;
const Power = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 25px;
  color: ${({ power }) => (power === "ON" ? "green" : "red")};
  svg {
    cursor: pointer;
    transition: linear 0.1s;
  }
  svg:hover {
    scale: 1.2;
  }
`;
