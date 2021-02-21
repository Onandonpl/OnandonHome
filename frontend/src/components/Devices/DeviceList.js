import React from "react";
import styled from "styled-components/macro";
import { useCollection } from "react-firebase-hooks/firestore";

import firebase from "../../config/firebase";
import LoadingList from "../Animations/LoadingList";
import renderSwitch from "./DevicesSwitch";

const DeviceList = ({ roomId }) => {
  const [value, loading] = useCollection(
    firebase
      .firestore()
      .collection("rooms")
      .doc(roomId)
      .collection("devices")
      .orderBy("created", "asc")
  );

  if (loading) return <LoadingList />;

  return (
    <DeviceListContainer>
      {value.docs.map((doc) => renderSwitch(doc, roomId))}
    </DeviceListContainer>
  );
};

export default DeviceList;
const DeviceListContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
