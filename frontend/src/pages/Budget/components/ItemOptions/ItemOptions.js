import React from "react";
import { Container } from "./style";

import DeleteItem from "../DeleteItem/DeleteItem";

const Options = ({ itemId }) => {
  return (
    <Container>
      <DeleteItem itemId={itemId} />
    </Container>
  );
};

export default Options;
