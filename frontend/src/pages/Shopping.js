import React from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet";

import ShoppingList from "../components/ShoppingList/ShoppingList";

const Shopping = () => {
  return (
    <ShoppingContainer>
      <Helmet>
        <title>Lista Zakupów</title>
      </Helmet>
      <ShoppingList />
    </ShoppingContainer>
  );
};

export default Shopping;

const ShoppingContainer = styled.div`
  min-height: calc(100vh - 50px);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #f1f1ff;
`;
