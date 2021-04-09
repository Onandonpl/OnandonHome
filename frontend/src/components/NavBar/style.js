import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  width: 120px;
  overflow-y: auto;
  padding: 80px 0;

  transform: translateX(${({ hide }) => (hide === false ? "-120px" : "0px")});
  transition: linear 0.1s;
  background-color: #ffffff;
  box-shadow: 10px 0px 12px -15px rgba(0, 0, 0, 0.55);
`;
