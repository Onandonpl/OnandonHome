import React, { useEffect, useReducer, useContext, createContext } from "react";

import { useCollection } from "react-firebase-hooks/firestore";
import { shoppingReducer, initialState } from "../reducer/shoppingReducer";
import { db } from "../lib/firebase";

const ShoppingContext = createContext();
const ShoppingDispatchContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingReducer, initialState());
  const [value] = useCollection(
    db.collection("shopping").orderBy("created", "asc")
  );

  useEffect(() => {
    if (value) {
      const shoppingList = value.docs.map((val) => {
        return { shoppingItem: val.data(), shoppingItemId: val.id };
      });
      dispatch({ type: "SET_SHOPPING", payload: shoppingList });
    }
  }, [value]);
  
  return (
    <ShoppingDispatchContext.Provider value={dispatch}>
      <ShoppingContext.Provider value={state}>
        {children}
      </ShoppingContext.Provider>
    </ShoppingDispatchContext.Provider>
  );
};

export const useShopping = () => {
  return useContext(ShoppingContext);
};
export const useDispatchShopping = () => {
  return useContext(ShoppingDispatchContext);
};
