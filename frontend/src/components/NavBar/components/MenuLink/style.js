import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SingleLink = styled(NavLink)`
  margin: 15% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: #707070;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  transition: linear 0.1s;
  &:hover {
    color: #392ccd;
  }
  p {
    font-size: 25px;
  }
`;
