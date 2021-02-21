import React from "react";
import styled from "styled-components/macro";
import { useCollection } from "react-firebase-hooks/firestore";

import firebase from "../../config/firebase";

import AddPlannedCategory from "./addData/AddPlannedCategory";
import RenderPlannedYear from "./renderYear/RenderPlannedYear";

const ExpensesList = () => {
  const [value, loading] = useCollection(
    firebase
      .firestore()
      .collection("plannedCategories")
      .orderBy("created", "asc")
  );

  if (loading) return <div>ladowanie</div>;

  const plannedData = value.docs
    .map((doc) => doc)
    .map((value) => ({ plannedYear: value.data(), id: value.id }));

  return (
    <Expenses>
      <AddPlannedCategory />
      <RenderPlannedYear plannedData={plannedData} />
    </Expenses>
  );
};

export default ExpensesList;

const Expenses = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 5px;
  background-color: #ffff;
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
