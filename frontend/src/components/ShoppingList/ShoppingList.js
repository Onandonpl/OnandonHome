import React from "react";
import styled from "styled-components/macro";
import { useCollection } from "react-firebase-hooks/firestore";

import firebase from "../../config/firebase";
import Loading from "../Animations/Loading";

import List from "./List";
import ListAdd from "./ListAdd";

const ShoppingList = () => {
  const [value, loading] = useCollection(
    firebase.firestore().collection("shopping").orderBy("created", "asc")
  );

  if (loading) return <Loading />;
  return (
    <ShoppingListContainer>
      <ListAdd />
      {value.docs.map((doc) => (
        <List key={doc.id} doc={doc}></List>
      ))}
    </ShoppingListContainer>
  );
};

export default ShoppingList;
const ShoppingListContainer = styled.div`
  height: 100%;
  padding: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
