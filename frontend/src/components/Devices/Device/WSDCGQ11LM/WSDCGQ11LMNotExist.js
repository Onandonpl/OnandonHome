import React from "react";
import styled from "styled-components/macro";
import { AiFillDelete } from "react-icons/ai";

const WSDCGQ11LMNotExist = ({ handleDeleteDevice }) => {
  return (
    <NoExist>
      <p>Urządzenie nie istnieje</p>
      <DeleteButton onClick={handleDeleteDevice}>
        <AiFillDelete />
      </DeleteButton>
    </NoExist>
  );
};

export default WSDCGQ11LMNotExist;
const NoExist = styled.div`
  position: relative;
  height: 137.15px;
  width: 150px;

  margin: 0 10px 20px 10px;

  background-color: #f7f7ff;
  border: 1px solid rgba(178, 184, 200, 0.3);
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;

  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: linear 0.1s;
  &:hover {
    scale: 1.1;
  }
  &:focus {
    scale: 1.1;
  }
`;
