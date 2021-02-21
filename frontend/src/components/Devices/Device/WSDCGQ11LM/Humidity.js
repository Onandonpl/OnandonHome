import React from "react";
import styled from "styled-components/macro";

const Humidity = ({ humidity }) => {
  return (
    <HumidityContainer state={humidity}>
      <p>{humidity}%</p>
    </HumidityContainer>
  );
};

export default Humidity;
const HumidityContainer = styled.div`
  position: relative;
  width: 110px;
  height: 110px;

  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.7));

  font-size: 14px;
  p {
    position: absolute;
    top: 75%;
    left: 50%;
    z-index: 10;

    transform: translate(-50%, -50%);
  }
  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";

    width: 100%;
    height: 100%;

    background-color: white;
    background-image: linear-gradient(
      to top,
      lightblue ${({ state }) => state}%,
      transparent 36%
    );
  }

  &::before {
    clip-path: circle(25% at 50% 75%);
  }

  &::after {
    clip-path: polygon(50% 0%, 27% 65%, 73% 65%);
  }
`;
