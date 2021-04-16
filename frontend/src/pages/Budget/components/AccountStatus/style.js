import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 50px;
  padding: 25px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

`;

export const Type = styled.p`
  color: ${({ type }) => (type === "income" ? "#2ea449" : "#d93542")};
`;
