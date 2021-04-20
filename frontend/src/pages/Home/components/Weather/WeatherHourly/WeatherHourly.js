import React, { useState } from "react";
import { Container, Range, Top, Bottom } from "./style";

import Clouds from "./Clouds";
import Pressure from "./Pressure";
import Humidity from "./Humidity";
import WindSpeed from "./WindSpeed";
import FeelsLike from "./FeelsLike";
import Time from "./Time";
import Icon from "./Icon";
import Temperature from "./Temperature";

const WeatherHourly = ({ hourly }) => {
  const [value, setValue] = useState(0);
  const {
    temp,
    wind_speed,
    humidity,
    feels_like,
    clouds,
    weather,
    dt,
    pressure,
  } = hourly[value];

  const handleValue = (e) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <Container>
      <Time dt={dt} />
      <Range
        type="range"
        min={0}
        max={47}
        name="time"
        value={value}
        onChange={handleValue}
      />
      <Top>
        <Icon weatherIcon={weather} />
        <Temperature temperature={temp} />
      </Top>
      <Bottom>
        <div>
          <Clouds clouds={clouds} />
          <WindSpeed windSpeed={wind_speed} />
          <FeelsLike feelsLike={feels_like} />
        </div>
        <div>
          <Humidity humidity={humidity} />
          <Pressure pressure={pressure} />
        </div>
      </Bottom>
    </Container>
  );
};

export default WeatherHourly;
