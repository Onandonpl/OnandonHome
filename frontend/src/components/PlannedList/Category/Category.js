import React, { useState } from "react";
import styled from "styled-components/macro";

import { useAlert } from "react-alert";
import { useCollection } from "react-firebase-hooks/firestore";
import { AiFillDelete } from "react-icons/ai";

import firebase from "../../../config/firebase";
import { deleteCategory } from "../../../utils/firebase/firebaseFunctions";

import {
  slide_up,
  slide_out_left,
} from "../../../utils/styledComponents/animations";

import Months from "../Months/Months";
import LoadingContainer from "../../Styled/LoadingContainer";

const Category = ({ categoryName, categoryId }) => {
  const alert = useAlert();
  const [fadeOut, setFadeOut] = useState(true);
  const [value, loading] = useCollection(
    firebase
      .firestore()
      .collection("plannedCategories")
      .doc(categoryId)
      .collection("expenses")
  );

  if (loading) return <LoadingContainer />;

  const formattedMonths = value.docs.map((month) => ({
    monthData: month.data(),
    monthId: month.id,
  }));

  const handleDeleteCategory = () => {
    alert.show(`Usunięto ${categoryName}`);
    setFadeOut(!fadeOut);

    const timer = setTimeout(() => {
      deleteCategory(categoryId);
    }, 250);
    return () => clearTimeout(timer);
  };

  return (
    <Container props={fadeOut}>
      <Information>
        <p>{categoryName}</p>
        <DeleteButton onClick={handleDeleteCategory}>
          <AiFillDelete />
        </DeleteButton>
      </Information>

      <Months
        categoryName={categoryName}
        monthsData={formattedMonths}
        categoryId={categoryId}
      ></Months>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  padding: 5px;
  margin: 5px 0;

  display: flex;
  flex-wrap: wrap;

  background-color: #f1f1ff;

  border-radius: 5px;

  animation: ${({ props }) => (props === true ? slide_up : slide_out_left)} 0.3s
    linear;
  animation-iteration-count: 1;
`;
const Information = styled.div`
  height: 50px;
  width: 150px;
  padding: 2px 5px;

  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  p {
    margin-right: 5px;
  }
`;
const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 10px;
  transition: linear 0.1s;

  &:hover {
    scale: 1.1;
  }
  &:focus {
    scale: 1.1;
  }
`;
