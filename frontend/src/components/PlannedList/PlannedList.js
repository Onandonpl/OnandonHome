import React from "react";
import styled from "styled-components/macro";
import { useCollection } from "react-firebase-hooks/firestore";

import firebase from "../../config/firebase";

import AddPlannedCategory from "./addData/AddPlannedCategory";
import CategoriesYear from "./renderYear/CategoriesYear";

const PlannedList = () => {
  const [value, loading] = useCollection(
    firebase
      .firestore()
      .collection("plannedCategories")
      .orderBy("created", "asc")
  );

  if (loading) return <div>ladowanie</div>;

  const categories = value.docs
    .map((doc) => doc)
    .map((value) => ({ categoryData: value.data(), categoryId: value.id }));

  return (
    <Expenses>
      <AddPlannedCategory />
      <CategoriesYear categories={categories} />
    </Expenses>
  );
};

export default PlannedList;

const Expenses = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 5px;
  background-color: #ffff;
`;
