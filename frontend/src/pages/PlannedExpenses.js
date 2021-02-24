import React from "react";

import Planned from "../components/PlannedList/Planned";
import PageContainer from "../components/Styled/PageContainer";

const PlannedExpenses = () => {
  return (
    <PageContainer title="Planowane wydatki">
      <Planned />
    </PageContainer>
  );
};

export default PlannedExpenses;
