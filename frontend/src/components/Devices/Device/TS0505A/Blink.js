import React from "react";
import styled from "styled-components/macro";
import client from "../../../../config/mqttConnect";
import { BiTargetLock } from "react-icons/bi";

const Blink = ({ devicename }) => {
  const handleBlink = () => {
    console.log(client);
    client.publish(
      `zigbee2mqtt/${devicename}/set`,
      JSON.stringify({ effect: "blink" })
    );
  };

  return (
    <BlinkButton>
      <BiTargetLock onClick={handleBlink} />
    </BlinkButton>
  );
};

export default Blink;
const BlinkButton = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 25px;

  svg {
    cursor: pointer;
    transition: linear 0.1s;
  }
  svg:hover {
    scale: 1.2;
  }
`;
