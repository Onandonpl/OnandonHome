import React from "react";
import styled from "styled-components/macro";
import { useCollection } from "react-firebase-hooks/firestore";

import firebase from "../../config/firebase";

import List from "./List";
import AddList from "./AddList";
import LoadingPage from "../Styled/LoadingPage";

const ShoppingList = () => {
  const [value, loading] = useCollection(
    firebase.firestore().collection("shopping").orderBy("created", "asc")
  );

  if (loading) return <LoadingPage />;

  const formattedLists = value.docs
    .map((doc) => doc)
    .map((value) => ({ listData: value.data(), listId: value.id }));

  return (
    <Container>
      <AddList />
      {formattedLists.map((list) => (
        <List key={list.listId} listData={list}></List>
      ))}
    </Container>
  );
};

export default ShoppingList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
