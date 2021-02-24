import React from "react";
import styled from "styled-components/macro";
import { useAlert } from "react-alert";
import EasyEdit from "react-easy-edit";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

import ExpenseButton from "./ExpenseButton";
import { updatePlannedAmount } from "../../../utils/firebase/firebaseFunctions";
const PlannedExpense = ({ expenseData, expenseId, categoryId }) => {
  const alert = useAlert();

  const { plannedExpenseName, amount, added } = expenseData;

  const handleUpdatePlannedAmount = (value) => {
    const parsedAmount = parseInt(value);

    return isNaN(value) === false && value.toString().split("-")[0] === ""
      ? (updatePlannedAmount(categoryId, expenseId, parsedAmount),
        alert.show(`Zaaktualizowano ${plannedExpenseName}`))
      : alert.show(`Błędne dane`);
  };

  return (
    <Container added={added}>
      {plannedExpenseName}
      <Amount>
        {added ? (
          <p>{amount}zł</p>
        ) : (
          <>
            <EasyEdit
              type="text"
              value={amount.toString()}
              onSave={handleUpdatePlannedAmount}
              saveButtonLabel={<AiOutlineCheck />}
              cancelButtonLabel={<AiOutlineClose />}
              placeholder="Kliknij żeby edytować"
            />
            <p>zł</p>
            <ExpenseButton
              expenseData={expenseData}
              expenseId={expenseId}
              categoryId={categoryId}
            />
          </>
        )}
      </Amount>
    </Container>
  );
};

export default PlannedExpense;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 1px;
  border-left: 5px solid
    ${({ added }) => (added === true ? "#2ea449" : "#d93542")};
`;
const Amount = styled.div`
  display: flex;
`;
