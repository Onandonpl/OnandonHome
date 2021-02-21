import React from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet";

import RoomList from "../components/Rooms/RoomList";
import RoomAdd from "../components/Rooms/RoomAdd";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <RoomAdd />
      <RoomList />
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  min-height: calc(100vh - 50px);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #f1f1ff;
`;
