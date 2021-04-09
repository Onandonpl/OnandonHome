import React from "react";
import WeatherDay from "../WeatherDay/WeatherDay";
const WeatherList = ({ daily }) => {
  return (
    <>
      {daily?.map((day) => {
        return <WeatherDay key={day.dt} day={day} />;
      })}
    </>
  );
};

export default WeatherList;
