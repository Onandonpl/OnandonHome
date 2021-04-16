import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;

  border-left: 5px solid
    ${({ type }) => (type === "income" ? "#2ea449" : "#d93542")};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
