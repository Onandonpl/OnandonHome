import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 2px solid rgba(0, 0, 0, 0.15);

  img {
    height: 50px;
    width: 50px;
    object-fit: fill;
  }
`;
