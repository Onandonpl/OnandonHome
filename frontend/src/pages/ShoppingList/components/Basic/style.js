import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 25px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #392ccd;
  color: white;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const ProductName = styled.p`
  flex: 1;
`;
export const ProductQuantity = styled.p`
  flex: 1;
  margin-left: 30px;
`;
export const ProductOptions = styled.p`
  flex: 1;
  text-align: right;
`;
