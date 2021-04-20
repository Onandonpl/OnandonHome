import React from "react";

const Time = ({ dt }) => {
  const dailyTime = new Date(dt * 1000).toLocaleTimeString();

  return (
    <div>
      <p>{dailyTime}</p>
    </div>
  );
};

export default Time;
