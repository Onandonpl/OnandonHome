import React from "react";
import styled from "styled-components/macro";
import { useCollection } from "react-firebase-hooks/firestore";

import firebase from "../../config/firebase";
import Loading from "../Animations/Loading";
import Room from "./Room";
import CC2531 from "../Devices/Device/CC2531/CC2531";
const RoomList = () => {
  const [value, loading] = useCollection(
    firebase.firestore().collection("rooms").orderBy("created", "asc")
  );

  if (loading) return <Loading />;

  return (
    <RoomListContainer>
      <CC2531 />
      {value.docs.map((doc) => (
        <Room key={doc.id} roomId={doc.id} data={doc.data()}></Room>
      ))}
    </RoomListContainer>
  );
};

export default RoomList;

const RoomListContainer = styled.div`
  height: 100%;

  padding: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
