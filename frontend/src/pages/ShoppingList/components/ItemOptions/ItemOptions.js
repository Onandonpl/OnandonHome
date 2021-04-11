import React from "react";

import { OptionsContainer } from "./style";
import DeleteItem from "../DeleteItem/DeleteItem";
const ItemOptions = ({ dispatch, shoppingItemId }) => {
  return (
    <OptionsContainer>
      <DeleteItem dispatch={dispatch} shoppingItemId={shoppingItemId} />
    </OptionsContainer>
  );
};

export default ItemOptions;
