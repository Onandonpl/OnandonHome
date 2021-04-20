import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.6);
`;
export const InfoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const Temperature = styled.div`
  font-size: 25px;
  font-weight: 700;
  span {
    font-size: 15px;
  }
`;
export const Humidity = styled.div`
  font-size: 25px;
  font-weight: bold;
  span {
    font-size: 15px;
  }
`;
export const PowerInfo = styled.div``;
export const Pressure = styled.div`
  font-size: 25px;
  font-weight: bold;
  span {
    font-size: 15px;
  }
`;

export const BatteryLevel = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: black;
`;

export const Battery = styled.div`
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

export const SignalLevel = styled.div`
  position: absolute;
  top: 5px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: black;
`;

export const Signal = styled.div`
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
export const DeviceName = styled.p`
  position: absolute;
  top: 5px;
  left: 5px;
`;
export const PinDeviceButton = styled.button`
  position: absolute;
  bottom: 5px;
  right: 25px;
  width: 10px;
  height: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const DeleteDeviceButton = styled.button`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 10px;
  height: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
