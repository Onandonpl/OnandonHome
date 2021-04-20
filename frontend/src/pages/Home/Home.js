import React from "react";
import { Container } from "./style";
import Devices from "components/Devices/Devices";
import Weather from "./components/Weather/Weather";
import { useHomeDevices } from "context/HomeDevicesContext";

const Home = () => {
  const homeDevices = useHomeDevices();
  const { itemList, loading } = homeDevices;
  return (
    <Container>
      <Weather />
      {loading ? (
        <div>loading</div>
      ) : (
        <Devices room={"home"} itemList={itemList} />
      )}
    </Container>
  );
};

export default Home;
