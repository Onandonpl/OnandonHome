import React from "react";
import { OptionsContainer } from "./style";

import DeleteItem from "../DeleteItem/DeleteItem";

const ItemOptions = ({ itemId }) => {
  return (
    <OptionsContainer>
      <DeleteItem itemId={itemId} />
    </OptionsContainer>
  );
};

export default ItemOptions;
