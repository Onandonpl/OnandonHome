import React from "react";
import { Container } from "./style";
import DeleteDevice from "./DeleteDevice";

const WSDCGQ11LMNotExist = ({ room, itemId }) => {
  return (
    <Container>
      Nie istnieje taki czujnik <DeleteDevice room={room} itemId={itemId} />
    </Container>
  );
};

export default WSDCGQ11LMNotExist;
