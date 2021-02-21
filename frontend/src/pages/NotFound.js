import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <Link to="/">Home</Link>
    </NotFoundContainer>
  );
};

export default NotFound;
const NotFoundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999;

  width: 100%;
  height: 100vh;

  background-color: #1753fc;

  display: flex;
  justify-content: center;
  align-items: center;
`;
