import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components/macro";

import firebase from "../../../config/firebase";

import Months from "../Months/Months";

const Category = ({ categoryName, categoryId }) => {
  const [value, loading] = useCollection(
    firebase
      .firestore()
      .collection("plannedCategories")
      .doc(categoryId)
      .collection("expenses")
  );
  if (loading) return <div>ladowanie</div>;

  const monthsData = value.docs.map((month) => ({
    monthData: month.data(),
    monthId: month.id,
  }));
  return (
    <YearContainer>
      {categoryName}
      <Months
        categoryName={categoryName}
        monthsData={monthsData}
        categoryId={categoryId}
      ></Months>
    </YearContainer>
  );
};

export default Category;

const YearContainer = styled.div`
  display: flex;
`;
const CategoryName = styled.div`
  height: 50px;
  width: 150px;
`;
