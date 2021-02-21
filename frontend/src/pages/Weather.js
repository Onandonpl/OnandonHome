import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components/macro";
import { useDocument } from "react-firebase-hooks/firestore";

import firebase from "../config/firebase";
import WeatherRender from "../components/Weather/WeatherRender";
import Loading from "../components/Animations/Loading";

const Weather = () => {
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

  return (
    <WeatherContainer>
      <Helmet>
        <title>Pogoda</title>
      </Helmet>
      <WeatherRender positionData={value.data()} />
    </WeatherContainer>
  );
};

export default Weather;
const WeatherContainer = styled.div`
  min-height: 100vh;

  background-color: rgb(63, 66, 75);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
