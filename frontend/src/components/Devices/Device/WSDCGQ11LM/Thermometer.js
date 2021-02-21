import React from "react";
import styled from "styled-components/macro";

const Thermometer = ({ temperature, pressure }) => {
  const tempArrow = `${(temperature / 40) * 120}deg`;

  return (
    <ThermometerContainer>
      <OuterCircle>
        <MiddleCircle>
          <InnerCircle>
            <div>
              <p>{temperature}</p>
              <p>{pressure}</p>
            </div>

            <Line state={tempArrow}></Line>
          </InnerCircle>
        </MiddleCircle>
      </OuterCircle>
    </ThermometerContainer>
  );
};

export default Thermometer;

const ThermometerContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  padding: 10px;
`;

const OuterCircle = styled.div`
  width: 100px;
  height: 100px;

  background-color: #ffff;

  border-radius: 50%;


  display: flex;
  justify-content: center;
  align-items: center;
`;

const MiddleCircle = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100px;
  height: 100px;

  border-radius: 50%;

  background: rgb(101, 43, 150);
  background: linear-gradient(
    90deg,
    rgba(101, 43, 150, 1) 0%,
    rgba(205, 47, 95, 1) 94%,
    rgba(222, 23, 23, 1) 99%
  );
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    position: absolute;
    content: "";
    top: 71%;
    left: 0;
    z-index: 10;

    width: 100px;
    height: 30px;

    background-color: #f1f1f1;
    border-radius: 50%;
  }
`;
const InnerCircle = styled.div`
  position: absolute;
  z-index: 11;

  width: 80px;
  height: 80px;

  background-color: #ffff;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    position: relative;
    font-size: 14px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  p:nth-child(1)::after {
    position: absolute;
    top: -1px;
    right: -7px;

    content: "°";
  }
  p:nth-child(2)::after {
    position: absolute;
    bottom: 1px;
    right: -17px;
    font-size: 8px;
    content: "hPa";
  }
`;

const Line = styled.div`
  position: absolute;
  left: 0;
  top: 2%;
  overflow: hidden;

  width: 100%;
  height: 100%;

  background-color: transparent;
  border-radius: 50%;

  transform: rotate(${({ state }) => state});
  transition: linear 0.4s;

  &::after {
    position: absolute;
    left: 10px;
    top: 10px;
    content: "";

    width: 15px;
    height: 2px;

    background-color: black;

    transform: rotate(55deg);
  }
`;
