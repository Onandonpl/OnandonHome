import React, { useState } from "react";
import styled from "styled-components/macro";
import { AiFillDelete, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useAlert } from "react-alert";
import EasyEdit from "react-easy-edit";

import {
  deleteTransaction,
  updateTransactionName,
  updateTransactionAmount,
} from "../../../utils/firebase/firebaseFunctions";

const Transaction = ({ transactionData }) => {
  const {
    transactionName,
    type,
    amount,
    mainCategory,
    subCategory,
  } = transactionData.transaction;

  const formattedDate = new Date(
    transactionData.transaction.created.seconds * 1000
  ).toLocaleDateString();

  const [fadeOut, setFadeOut] = useState(true);
  const alert = useAlert();

  const handleDeleteTransaction = () => {
    alert.show(`Usunięto ${transactionName}`);
    setFadeOut(!fadeOut);
    const timer = setTimeout(() => {
      deleteTransaction(transactionData.id);
    }, 250);

    return () => clearTimeout(timer);
  };
  const handleUpdateTransactionName = (value) => {
    alert.show(`Zaaktualizowano ${transactionName}`);
    updateTransactionName(transactionData.id, value);
  };

  const handleUpdateTransactionAmount = (value) => {
    const convertAmount = parseInt(value);
    if (type === "expense") {
      return isNaN(value) === false && value.toString().split("-")[0] === ""
        ? (updateTransactionAmount(transactionData.id, convertAmount),
          alert.show(`Zaaktualizowano ${transactionName}`))
        : alert.show(`Błędne dane`);
    }
    if (type === "income") {
      return isNaN(value) === false && value.split("")[0] !== "-"
        ? (updateTransactionAmount(transactionData.id, convertAmount),
          alert.show(`Zaaktualizowano ${transactionName}`))
        : alert.show(`Błędne dane`);
    }
  };

  return (
    <TransactionContainer color={type}>
      <Main>
        <Box>
          <EasyEdit
            type="text"
            value={transactionName}
            onSave={handleUpdateTransactionName}
            saveButtonLabel={<AiOutlineCheck />}
            cancelButtonLabel={<AiOutlineClose />}
            placeholder="Kliknij żeby edytować"
          />
          <Amount>
            <EasyEdit
              type="text"
              value={amount.toString()}
              onSave={handleUpdateTransactionAmount}
              saveButtonLabel={<AiOutlineCheck />}
              cancelButtonLabel={<AiOutlineClose />}
              placeholder="Kliknij żeby edytować"
            />
            zł
          </Amount>
        </Box>
        <Menu>
          <TriggerButton onClick={handleDeleteTransaction}>
            <AiFillDelete />
          </TriggerButton>
        </Menu>
      </Main>
      <Category>
        <p>{mainCategory}</p>
        <p>{subCategory}</p>
        <p>{formattedDate}</p>
      </Category>
    </TransactionContainer>
  );
};

export default Transaction;
const TransactionContainer = styled.div`
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;

  background-color: #f5f6f8;

  border-left: 5px solid
    ${({ color }) => (color === "income" ? "#2ea449" : "#d93542")};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
`;

const TriggerButton = styled.button`
  background-color: transparent;
  border: none;

  font-size: 15px;
  cursor: pointer;

  transition: linear 0.1s;

  &:hover {
    scale: 1.1;
  }
  &:focus {
    scale: 1.1;
  }
`;
const Menu = styled.div``;
const Amount = styled.div`
  margin-left: 5px;
  
  display: flex;
`;
const Box = styled.div`
  display: flex;
  input {
    height: 26px;
  }
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Category = styled.div`
  display: flex;
  font-size: 10px;
  p {
    margin-right: 5px;
  }
`;
