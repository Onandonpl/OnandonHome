import React from "react";
import styled from "styled-components/macro";
const GosundBasicInfo = ({ data, status, powerstatus }) => {
  if (data === undefined) return <div>Zresetuj urządzenie </div>;
  const { Current, Power, Today, Yesterday, Total, Voltage } = data.ENERGY;
  return (
    <GosundBasic>
      <Info>
        <SingleInfo>
          <p>Napięcie</p>
          {status === "Online" && powerstatus === "ON" ? Voltage : "0"} V
        </SingleInfo>
        <SingleInfo>
          <p>Aktualne</p>
          {status === "Online" && powerstatus === "ON" ? Current : "0"} A
        </SingleInfo>
        <SingleInfo>
          <p>Moc</p>
          {status === "Online" && powerstatus === "ON" ? Power : "0"} W
        </SingleInfo>
      </Info>
      <Info>
        <SingleInfo>
          <p>Zużycie dzisiejsze</p>
          {Today.toFixed(2)} kWh
        </SingleInfo>
        <SingleInfo>
          <p>Zużycie wczorajsze</p>
          {Yesterday.toFixed(2)} kWh
        </SingleInfo>
        <SingleInfo>
          <p>Zużycie ogólne</p>
          {Total.toFixed(2)} kWh
        </SingleInfo>
      </Info>
    </GosundBasic>
  );
};

export default GosundBasicInfo;

const GosundBasic = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  font-size: 10px;
`;

const SingleInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
