import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 350px;
  height: 420px;
  margin: 15px;
  border-radius: 10px;

  background-color: #ffffff;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25);
`;
export const Img = styled.img`
  height: 300px;
  width: 100%;
`;
export const Content = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
`;

export const Basic = styled.div`
  position: absolute;
  left: 50%;
  top: 60px;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Temp = styled.p`
  position: relative;
  color: white;
  font-size: 50px;
  font-weight: 700;
  &::after {
    content: "°C";
    position: absolute;
    top: 10px;
    right: -25px;
    font-size: 20px;
  }
`;
export const DayContainer = styled.p`
  color: white;
`;

export const ParamContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  p {
    margin-right: 5px;
    font-size: 20px;
  }
  span {
    font-size: 8px;
  }
`;

export const Deg = styled.p`
  transform: rotate(${({ windDeg }) => windDeg});
`;
