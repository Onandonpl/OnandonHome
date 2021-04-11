import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

export const ProductName = styled.p`
  flex: 1;
  overflow: hidden;
`;
export const QuantityContainer = styled.div`
  flex: 1;
`;
export const OptionsContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
