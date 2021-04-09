import React from "react";
import { Container, Img, Content, Basic } from "./style";
import Temperature from "./Temperature";
import Day from "./Day";
import Sunset from "./Sunset";
import Sunrise from "./Sunrise";
import Clouds from "./Clouds";
import Pressure from "./Pressure";
import Humidity from "./Humidity";
import WindSpeed from "./WindSpeed";
import WindDeg from "./WindDeg";
import FeelsLike from "./FeelsLike";
const WeatherDay = ({ day }) => {
  console.log(day);
  const {
    dt,
    temp,
    sunset,
    sunrise,
    wind_deg,
    wind_speed,
    clouds,
    feels_like,
    humidity,
    pressure,
  } = day;
  const randomImage = Math.floor(Math.random() * (7 - 0 + 1) + 0);
  return (
    <Container>
      <Basic>
        <Day time={dt} />
        <Temperature temperature={temp} />
      </Basic>
      <Img src={`/WeatherBackground/${randomImage}.jpg`}></Img>
      <Content>
        <div>
          <Sunset sunset={sunset} />
          <Sunrise sunrise={sunrise} />
          <Clouds clouds={clouds} />
          <Pressure pressure={pressure} />
        </div>
        <div>
          <Humidity humidity={humidity} />
          <WindSpeed windSpeed={wind_speed} />
          <WindDeg windDeg={wind_deg} />
          <FeelsLike feelsLike={feels_like} />
        </div>
      </Content>
    </Container>
  );
};

export default WeatherDay;
