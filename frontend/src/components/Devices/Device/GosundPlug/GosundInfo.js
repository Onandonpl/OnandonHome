import React from "react";
import styled from "styled-components/macro";
import { useDocument } from "react-firebase-hooks/firestore";
import { AiFillCloseCircle } from "react-icons/ai";

import firebase from "../../../../config/firebase";

const GosundInfo = ({ data, close }) => {
  const [value, loading] = useDocument(
    firebase.firestore().doc("settings/8ElEQULeNGKhAjta7KIc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const { name, deviceSensor, deviceState, info2, info3, result } = data;
  if (!name || !deviceSensor || !deviceState || !info2 || !info3 || !result) {
    return (
      <GosundInfoContainer>
        <CloseModalButton
          onClick={() => {
            close();
          }}
        >
          <AiFillCloseCircle />
        </CloseModalButton>
        Zresetuj urządzenie brak danych
      </GosundInfoContainer>
    );
  }
  const gosundPlugAdress = `http://${info2.IPAddress}`;
  const gosundPlugStartTime = deviceSensor.ENERGY.TotalStartTime.split("T");
  const gosundPlugUptime = deviceState.Uptime.split("T");

  return (
    <GosundInfoContainer>
      <CloseModalButton
        onClick={() => {
          close();
        }}
      >
        <AiFillCloseCircle />
      </CloseModalButton>
      <Info>
        <p>Nazwa urządzenia</p> {name}
      </Info>
      <Info>
        <p>Nazwa WiFi</p>
        {deviceState.Wifi.SSId}
      </Info>
      <Info>
        <p>Adres IP</p> <a href={gosundPlugAdress}>{info2.IPAddress}</a>
      </Info>
      <Info>
        <p>Pierwsze uruchomienie</p>
        {gosundPlugStartTime[0]}
      </Info>
      <Info>
        <p>Czas działania</p>
        <p>
          {gosundPlugUptime[0]} Dni {gosundPlugUptime[1]} Godzin
        </p>
      </Info>
      <Info>
        <p>Powód restartu</p>
        {info3.RestartReason}
      </Info>
      <Info>
        <p>Ostatnia komenda</p>
        {JSON.stringify(result)}
      </Info>
      <Info>
        <p>Koszt zużycia</p>
        {loading
          ? "Ładowanie "
          : (deviceSensor.ENERGY.Total * value.data().powerCost).toFixed(2)}
        zł
      </Info>
    </GosundInfoContainer>
  );
};

export default GosundInfo;
const GosundInfoContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50.9%, -50%);

  min-height: 320px;
  min-width: 300px;
  max-width: 1000px;
  width: 100%;

  padding: 10px;
  margin: 10px;

  overflow: hidden;

  background-color: #ffffff;
  border: 1px solid rgba(178, 184, 200, 0.9);
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const CloseModalButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 200;

  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: linear 0.1s;

  &:hover {
    scale: 1.2;
  }
`;
const Info = styled.div`
  height: 50px;
  width: 200px;

  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
