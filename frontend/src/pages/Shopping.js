import React from "react";

import ShoppingList from "../components/ShoppingList/ShoppingList";
import PageContainer from "../components/Styled/PageContainer";

const Shopping = () => {
  return (
    <PageContainer title={"Lista zakupów"}>
      <ShoppingList />
    </PageContainer>
  );
};

export default Shopping;
