import React, { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components/macro";

import firebase from "../../../config/firebase";
import Month from "../months/Month";
import Category from "../Category/Category";
const YearInfo = ({ categoryName, yearId }) => {
  const [value, loading] = useCollection(
    firebase
      .firestore()
      .collection("plannedCategories")
      .doc(yearId)
      .collection("expenses")
  );
  if (loading) return <div>ladowanie</div>;

  const months = value.docs.map((doc) => doc.data());
  return (
    <YearContainer>
      <Category categoryName={categoryName} months={months}></Category>
    </YearContainer>
  );
};

export default YearInfo;

const YearContainer = styled.div`
  display: flex;
`;
const CategoryName = styled.div`
  height: 50px;
  width: 150px;
`;
