import React from "react";
import styled from "styled-components/macro";
import { useCollection } from "react-firebase-hooks/firestore";

import firebase from "../../../config/firebase";
import LoadingList from "../../Animations/LoadingList";

import Product from "./Product";

const ProductList = ({ listId, listColor }) => {
  const [value, loading] = useCollection(
    firebase
      .firestore()
      .collection("shopping")
      .doc(listId)
      .collection("products")
      .orderBy("created", "asc")
  );
  if (loading) return <LoadingList />;
  return (
    <ProductListContainer>
      {value.docs.map((doc) => (
        <Product
          key={doc.id}
          data={doc}
          listId={listId}
          listColor={listColor}
        />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
const ProductListContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
