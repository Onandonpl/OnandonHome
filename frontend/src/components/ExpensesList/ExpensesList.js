import React from "react";
import styled from "styled-components/macro";
import { useCollection } from "react-firebase-hooks/firestore";

import firebase from "../../config/firebase";

import Balance from "./Balance/Balance";
import History from "./HistoryRender/History";
import Loading from "../Animations/Loading";

const ExpensesList = () => {
  const [value, loading] = useCollection(
    firebase.firestore().collection("expenses").orderBy("created", "asc")
  );
  if (loading) return <Loading />;

  const transactionData = value.docs
    .map((doc) => doc)
    .map((value) => ({ transaction: value.data(), id: value.id }));

  return (
    <Expenses>
      <Head>
        <Balance transactionData={transactionData} />
      </Head>
      <History transactionData={transactionData} />
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
