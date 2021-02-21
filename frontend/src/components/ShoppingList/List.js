import React, { useState } from "react";
import styled from "styled-components/macro";
import { AiFillDelete } from "react-icons/ai";
import { useAlert } from "react-alert";

import { deleteList } from "../../utils/firebase/firebaseFunctions";

import {
  slide_up,
  slide_out_left,
} from "../../utils/styledComponents/animations";
import ProductList from "./Product/ProductList";
import ProductAdd from "./Product/ProductAdd";

const List = ({ doc }) => {
  const alert = useAlert();
  const [fadeOut, setFadeOut] = useState(true);

  const { listColor, listName } = doc.data();
  const listId = doc.id;

  const handleDeleteList = () => {
    alert.show("Usunięto liste");
    setFadeOut(!fadeOut);

    const timer = setTimeout(() => {
      deleteList(listId);
    }, 250);
    return () => clearTimeout(timer);
  };

  return (
    <ListContainer props={fadeOut}>
      {listName}
      <ProductAdd listColor={listColor} listId={listId} />
      <ProductList listColor={listColor} listId={listId} />

      <DeleteButton onClick={handleDeleteList}>
        <AiFillDelete />
      </DeleteButton>
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.div`
  position: relative;
  min-height: 320px;
  min-width: 300px;
  max-width: 1100px;
  width: 100%;

  padding: 10px;
  margin: 10px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffff;
  border: 1px solid rgba(178, 184, 200, 0.5);
  animation: ${({ props }) => (props === true ? slide_up : slide_out_left)} 0.3s
    linear;
  animation-iteration-count: 1;
  border-radius: 5px;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;

  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 25px;
  transition: linear 0.1s;

  &:hover {
    scale: 1.1;
  }
  &:focus {
    scale: 1.1;
  }
`;
