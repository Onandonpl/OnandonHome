import React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import styled from "styled-components/macro";

import firebase from "../../config/firebase";
import WeatherRender from "./WeatherRender";
import Loading from "../Animations/Loading";

const WeatherData = () => {
  const [value, loading] = useDocument(
    firebase.firestore().doc("settings/8ElEQULeNGKhAjta7KIc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (loading) {
    return (
      <WeatherContainer>
        <Loading />
      </WeatherContainer>
    );
  }
  return <WeatherRender positionData={value.data()} />;
};

export default WeatherData;
const WeatherContainer = styled.div`
  min-height: 100vh;

  background-color: rgb(63, 66, 75);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
