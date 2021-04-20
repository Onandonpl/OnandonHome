import React, { useEffect, useReducer, useContext, createContext } from "react";

import { useCollection } from "react-firebase-hooks/firestore";
import { devicesReducer, initialState } from "../reducer/devicesReducer";
import { db } from "../lib/firebase";

const DevicesContext = createContext();
const DevicesDispatchContext = createContext();

export const DevicesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(devicesReducer, initialState);
  const [value] = useCollection(
    db.collection("devices").orderBy("created", "desc")
  );

  useEffect(() => {
    if (value) {
      const itemList = value.docs.map((value) => {
        return { item: value.data(), itemId: value.id };
      });

      dispatch({
        type: "SET_ITEMS",
        payload: { itemList: itemList },
      });
    }
  }, [value]);
  return (
    <DevicesDispatchContext.Provider value={dispatch}>
      <DevicesContext.Provider value={state}>
        {children}
      </DevicesContext.Provider>
    </DevicesDispatchContext.Provider>
  );
};

export const useDevices = () => {
  return useContext(DevicesContext);
};
export const useDispatchDevices = () => {
  return useContext(DevicesDispatchContext);
};
