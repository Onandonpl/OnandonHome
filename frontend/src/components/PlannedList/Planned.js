import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

import firebase from "../../config/firebase";

import ComponentContainer from "../Styled/ComponentContainer";
import LoadingContent from "../Styled/LoadingPage";

import AddPlannedCategory from "./ManipulateData/AddPlannedCategory";
import RenderCategoriesByYear from "./RenderCategoriesByYear";
import HandleYear from "./ManipulateData/HandleYear";

const Planned = () => {
  const [date, setDate] = useState(new Date().getFullYear());

  const [value, loading] = useCollection(
    firebase.firestore().collection("plannedCategories")
  );

  if (loading) return <LoadingContent />;

  const formattedCategories = value.docs
    .map((doc) => doc)
    .map((value) => ({ categoryData: value.data(), categoryId: value.id }));

  return (
    <ComponentContainer>
      <AddPlannedCategory date={date} />
      <HandleYear setDate={setDate} date={date} />
      <RenderCategoriesByYear
        formattedCategories={formattedCategories}
        year={date}
      />
    </ComponentContainer>
  );
};

export default Planned;
