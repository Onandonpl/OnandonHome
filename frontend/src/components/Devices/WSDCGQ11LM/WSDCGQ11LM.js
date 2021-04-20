import React from "react";
import { Container, DeviceName } from "./style";

import { useObject } from "react-firebase-hooks/database";
import firebase from "lib/firebase";
import WSDCGQ11LMNotExist from "./WSDCGQ11LMNotExist";
import DeleteDevice from "./DeleteDevice";
import PinDevice from "./PinDevice";
import Info from "./Info";
const WSDCGQ11LM = ({ data, room }) => {
  const { item, itemId } = data;
  const { deviceId, deviceType, deviceName } = item;
  const [value, loading] = useObject(firebase.database().ref(`${deviceId}`));
  if (loading) {
    return <div>loading</div>;
  }
  if (!value.val() || value.val().model !== deviceType) {
    return <WSDCGQ11LMNotExist room={room} itemId={itemId} />;
  }
  const realtimeData = value.val();

  return (
    <Container>
      <DeviceName>{deviceName}</DeviceName>
      <DeleteDevice room={room} itemId={itemId} />
      {room === "devices" ? <PinDevice item={item} /> : null}
      <Info realtimeData={realtimeData} />
    </Container>
  );
};

export default WSDCGQ11LM;
