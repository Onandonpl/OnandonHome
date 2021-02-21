import React from "react";
import styled from "styled-components/macro";
import { flipX } from "../../utils/styledComponents/animations";
const LoadingList = () => {
  return <Loader></Loader>;
};

export default LoadingList;

const Loader = styled.div`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  background: #d9dee2;
  box-sizing: border-box;
  animation: ${flipX} 1s ease infinite;
`;
