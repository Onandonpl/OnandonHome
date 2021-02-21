import React, { useState } from "react";
import styled from "styled-components/macro";
import { useAlert } from "react-alert";
import { AiFillDelete } from "react-icons/ai";

import { deleteProduct } from "../../../utils/firebase/firebaseFunctions";
import {
  updateProductChecked,
  updateProductFlag,
} from "../../../utils/firebase/firebaseFunctions";

import Checkbox from "../Checkbox";
import ProductFlags from "./ProductFlags";

const Product = ({ data, listId, listColor }) => {
  const alert = useAlert();
  
  const { name, checked, flag } = data.data();

  const [fadeOut, setFadeOut] = useState(true);
  const [flagColor, setFlagColor] = useState(flag);
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    setIsChecked((state) => !state);
    updateProductChecked(listId, data.id, !isChecked);
  };

  const handleFlag = (e) => {
    setFlagColor(e);
    updateProductFlag(listId, data.id, e);
  };


  const handleDeleteProduct = () => {
    alert.show(`Usunięto ${name}`);
    setFadeOut(!fadeOut);
    const timer = setTimeout(() => {
      deleteProduct(listId, data.id);
    }, 250);
    return () => clearTimeout(timer);
  };

  return (
    <ProductContainer props={flagColor}>
      <Checkbox handleClick={handleClick} isChecked={isChecked} />
      <ProductName>
        <p>{name}</p>
      </ProductName>
      <ProductOptions>
        <ProductFlags
          listColor={listColor}
          handleFlag={handleFlag}
        />
        <DeleteButton onClick={handleDeleteProduct}>
          <AiFillDelete />
        </DeleteButton>
      </ProductOptions>
    </ProductContainer>
  );
};

export default Product;
const ProductContainer = styled.div`
  position: relative;
  min-width: 300px;
  max-width: 300px;
  overflow: hidden;

  padding: 15px;
  margin: 5px;
  
  background-color: ${({ props }) => props};
  display: flex;
  align-items: center;
  flex: 1;
`;

const DeleteButton = styled.button`
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

const ProductName = styled.div`
  color: white;
  margin-left: 10px;
`;
const ProductOptions = styled.div`
  position: absolute;
  bottom: 0;
  right: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
