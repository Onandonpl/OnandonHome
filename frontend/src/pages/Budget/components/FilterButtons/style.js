import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
export const Button = styled.button`
  margin: 5px;
  padding: 3px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border: 1px solid ${({ color }) => color};
  border-radius: 4px;
`;
