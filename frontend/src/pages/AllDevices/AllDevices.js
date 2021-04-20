import React from "react";
import { Container } from "./style";
import AddDevice from "./components/AddDevice/AddDevice";
import { useDevices } from "context/DevicesContext";
import Devices from "components/Devices/Devices";
const AllDevices = () => {
  const devices = useDevices();
  const { itemList, loading } = devices;
  return (
    <Container>
      <AddDevice />
      {loading ? (
        <div>loading</div>
      ) : (
        <Devices room={"devices"} itemList={itemList} />
      )}
    </Container>
  );
};

export default AllDevices;
