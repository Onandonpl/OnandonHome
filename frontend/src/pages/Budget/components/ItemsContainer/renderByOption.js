import Incomes from "../Incomes/Incomes";
import Expenses from "../Expenses/Expenses";
import AllTransactions from "../AllTransactions/AllTransactions";

export const renderByOption = (option, filteredByOption) => {
  switch (option) {
    case "all":
      return <AllTransactions filteredItemsByDate={filteredByOption} />;
    case "income":
      return <Incomes filteredItemsByDate={filteredByOption} />;
    case "expense":
      return <Expenses filteredItemsByDate={filteredByOption} />;
    default:
      return <AllTransactions filteredItemsByDate={filteredByOption} />;
  }
};
