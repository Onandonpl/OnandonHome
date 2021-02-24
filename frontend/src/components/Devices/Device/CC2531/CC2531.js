import React from "react";
import styled from "styled-components/macro";

import { useObject } from "react-firebase-hooks/database";

import firebase from "../../../../config/firebase";

const CC2531 = () => {
  const [value, loading] = useObject(firebase.database().ref("bridge"));
  if (loading) return <></>;
  if (!value.val()) return <></>;
  const { friendly_name, model } = value.val().message.meta;
  return (
    <CC2531Container>
      <p>Ostatnio zarejestrowane urządzenie</p>
      <p>Model urządzenia: {model}</p> <p>Nazwa urządzenia: {friendly_name}</p>
    </CC2531Container>
  );
};

export default CC2531;
const CC2531Container = styled.div`
  position: fixed;
  z-index: 301;
  top: 5px;

  p {
    color: white;
    font-size: 10px;
  }
`;
