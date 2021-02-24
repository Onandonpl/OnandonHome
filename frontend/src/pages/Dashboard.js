import React from "react";

import RoomList from "../components/Rooms/RoomList";
import RoomAdd from "../components/Rooms/RoomAdd";
import PageContainer from "../components/Styled/PageContainer";

const Dashboard = () => {
  return (
    <PageContainer title={"Home"}>
      <RoomAdd />
      <RoomList />
    </PageContainer>
  );
};

export default Dashboard;

