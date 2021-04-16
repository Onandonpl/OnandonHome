import React, { useEffect, useReducer, useContext, createContext } from "react";

import { useCollection } from "react-firebase-hooks/firestore";
import { budgetReducer, initialState } from "../reducer/budgetReducer";
import { db } from "../lib/firebase";

const BudgetContext = createContext();
const BudgetDispatchContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);
  const [value] = useCollection(
    db.collection("budget").orderBy("created", "desc")
  );
  const [budgetCategoriesValue] = useCollection(
    db.collection("budgetCategories")
  );

  useEffect(() => {
    if (value && budgetCategoriesValue) {
      const itemList = value.docs.map((value) => {
        return { item: value.data(), itemId: value.id };
      });

      const budgetCategories = budgetCategoriesValue.docs.map((value) => {
        return value.data();
      });

      dispatch({
        type: "SET_ITEMS",
        payload: { itemList: itemList, budgetCategories: budgetCategories },
      });
    }
  }, [value, budgetCategoriesValue]);
  return (
    <BudgetDispatchContext.Provider value={dispatch}>
      <BudgetContext.Provider value={state}>{children}</BudgetContext.Provider>
    </BudgetDispatchContext.Provider>
  );
};

export const useBudget = () => {
  return useContext(BudgetContext);
};
export const useDispatchBudget = () => {
  return useContext(BudgetDispatchContext);
};
