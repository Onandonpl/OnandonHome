import React, { useState } from "react";
import styled from "styled-components/macro";
import Transaction from "../Transaction/Transaction";
import MainCategoryChart from "./MainCategoryChart";

import { useForm } from "react-hook-form";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../../config/firebase";

const Expense = ({ filteredByType }) => {
  const dataArray = filteredByType.map((value) => value);
  const [filtered, setFiltered] = useState(dataArray);
  const { register, handleSubmit } = useForm();

  const [categories, loading] = useCollection(
    firebase.firestore().collection("categories").orderBy("created", "asc")
  );

  if (loading) return <> </>;

  const filteredByCategory = categories.docs.map((value) => value);
  
  const mainCategoriesList = () => {
    const filtered = filteredByCategory.filter((value) =>
      value.data().categoryType === "mainCategory" ? value : null
    );
    return filtered.map((value) => (
      <option key={value.id} value={value.data().categoryName}>
        {value.data().categoryName}
      </option>
    ));
  };

  const filterMainCategory = (data) => {
    setFiltered(
      dataArray.filter((value) =>
        value.transaction.mainCategory === data.category ? value : null
      )
    );
  };

  return (
    <ExpenseContainer>
      <Form onSubmit={handleSubmit(filterMainCategory)}>
        <Select name="category" ref={register}>
          {mainCategoriesList()}
        </Select>

        <ButtonSubmit type="submit" value="+" />
      </Form>
      <Content>
        {filtered.map((value) => (
          <Transaction key={value.id} transactionData={value} />
        ))}
        <Chart>
          <MainCategoryChart
            filteredByType={filteredByType}
            categories={categories}
          />
        </Chart>
      </Content>
    </ExpenseContainer>
  );
};

export default Expense;
const ExpenseContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Form = styled.form`
  width: 200px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 35px;
`;

const Select = styled.select`
  width: 100%;

  margin: 5px;
  padding: 5px;

  border: 2px solid rgb(22, 38, 51);
`;
const ButtonSubmit = styled.input`
  width: 200px;
  border-radius: 5px;
  background-color: #1753fc;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;
const Content = styled.div``;
const Chart = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
