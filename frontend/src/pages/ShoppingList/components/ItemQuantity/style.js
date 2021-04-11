import styled from "styled-components";

export const QuantityContainer = styled.div`
  flex: 1;
`;

export const Operations = styled.div`
  display: flex;
  align-items: center;
`;
export const Summary = styled.p`
  padding: 0 5px;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "0")};

  font-size: 25px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: linear 0.1s;

  &:hover {
    color: ${({ color }) => (color ? color : "#2693e6")};
  }
  &:focus {
    color: #2693e6;
  }
`;
