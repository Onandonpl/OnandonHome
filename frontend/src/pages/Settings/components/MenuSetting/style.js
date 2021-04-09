import styled from "styled-components";

export const Container = styled.div`
  height: 100px;

  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background-color: #fff;
  margin: 10px;
`;

export const Title = styled.p`
  font-size: 25px;
`;
export const Description = styled.p`
  font-size: 10px;
`;

export const Label = styled.label`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin-right: 15px;
  }
`;
