import React from "react";
import Item from "../Item/Item";

const Incomes = ({ filteredItemsByDate }) => {
  return (
    <div>
      {filteredItemsByDate.map((value) => {
        const { itemId } = value;
        return <Item key={itemId} data={value} />;
      })}
    </div>
  );
};

export default Incomes;
