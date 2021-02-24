import React from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet";

const PageContainer = ({ children, title }) => {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Container>
  );
};

export default PageContainer;

const Container = styled.div`
  min-height: calc(100vh - 50px);
  overflow: hidden;
  padding: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background-color: #f1f1ff;
`;
