import React from "react";
import styled from "styled-components/macro";

const ComponentContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ComponentContainer;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 5px;

  display: flex;
  flex-direction: column;

  background-color: #ffff;
`;
