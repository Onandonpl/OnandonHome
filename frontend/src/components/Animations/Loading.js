import React from "react";
import styled from "styled-components/macro";
import {
  animloader,
  animloader2,
} from "../../utils/styledComponents/animations";
const Loading = () => {
  return <Loader></Loader>;
};

export default Loading;
const Loader = styled.div`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  transform: rotate(45deg);

  &::before {
    content: "";
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 0;
    top: -24px;
    animation: ${animloader} 4s ease infinite;
  }
  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    animation: ${animloader2} 2s ease infinite;
  }
`;
