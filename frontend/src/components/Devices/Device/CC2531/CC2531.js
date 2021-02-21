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
      {model}:{friendly_name}
    </CC2531Container>
  );
};

export default CC2531;
const CC2531Container = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
`;
