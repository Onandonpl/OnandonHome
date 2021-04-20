import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
export const Range = styled.input`
  width: 50%;
  cursor: pointer;
`;

export const Top = styled.div`
  width: 100%;
  padding: 10px 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgb(0, 0, 0, 0.25);
`;

export const IconContainer = styled.div`
  img {
    width: 100px;
  }
`;
export const Img = styled.img`
  height: 300px;
  width: 100%;
`;
export const Bottom = styled.div`
  width: 100%;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
`;

export const Temp = styled.p`
  position: relative;
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
