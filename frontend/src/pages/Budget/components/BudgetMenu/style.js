import styled from "styled-components";

export const ButtonsContainer = styled.div`
  width: 100%;
  padding: 15px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  background-color: #392ccd;
  color: white;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
  
  @media (max-width: 554px) {
    justify-content: center;
  }

`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  position: relative;
  margin: 5px 5px;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 15px;
  transition: linear 0.1s;

  p::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: #85d2fe;
    transition: linear 0.1s;
  }
  p:hover::before {
    width: 100%;
  }
`;
