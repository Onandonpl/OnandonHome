import React from "react";
import {Container} from "./style"
import Item from "../Item/Item";
import AllTransactionsChart from "../Charts/AllTransactionsChart";
const AllTransactions = ({ filteredItemsByDate }) => {
  return (
    <Container>
      {filteredItemsByDate.map((value) => {
        const { itemId } = value;
        return <Item key={itemId} data={value} />;
      })}
      <AllTransactionsChart filteredItemsByDate={filteredItemsByDate} />
    </Container>
  );
};

export default AllTransactions;
