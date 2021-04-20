import React from "react";
import {
  InfoContainer,
  Temperature,
  Humidity,
  Pressure,
  BatteryLevel,
  Battery,
  SignalLevel,
  Signal,
} from "./style";
import { AiFillSignal } from "react-icons/ai";
import { IoMdBatteryFull } from "react-icons/io";
const Info = ({ realtimeData }) => {
  const { state } = realtimeData;
  const { temperature, humidity, battery, linkquality, pressure } = state;
  const lqi = ((linkquality - 0) / (255 - 0)) * 100;
  return (
    <InfoContainer>
      <Temperature>
        {temperature} <span>°C</span>
      </Temperature>
      <Humidity>
        {humidity} <span>%</span>
      </Humidity>
      <Pressure>
        {pressure} <span>hPa</span>
      </Pressure>
      <BatteryLevel>
        <IoMdBatteryFull />
        <Battery state={battery} />
      </BatteryLevel>
      <SignalLevel>
        <AiFillSignal />
        <Signal state={lqi} />
      </SignalLevel>
    </InfoContainer>
  );
};

export default Info;
