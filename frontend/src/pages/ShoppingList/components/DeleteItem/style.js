import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;

  font-size: 25px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: linear 0.1s;

  &:hover {
    color: red;
  }
  &:focus {
    color: red;
  }
`;
