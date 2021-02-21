import React from "react";
import styled from "styled-components/macro";

const AlertTemplate = ({ message }) => <Alert>{message}</Alert>;
export default AlertTemplate;
const Alert = styled.div`
  min-width: 300px;
  max-width: 400px;

  padding: 15px;
  margin: 20px;

  overflow: hidden;

  display: flex;

  background-color: #131931;

  color: #ffffff;

  z-index: 500;
`;
