import React from "react";
import styled from "styled-components/macro";
import { rotation } from "../../utils/styledComponents/animations";
const LoadingDevice = () => {
  return <Loader></Loader>;
};

export default LoadingDevice;

const Loader = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid;
  margin: 20px;
  border-color: #ff3d00 transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;
