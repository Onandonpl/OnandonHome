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

  if (loading) return <Loading />;

  return <WeatherRender positionData={value.data()} />;
};

export default WeatherData;
