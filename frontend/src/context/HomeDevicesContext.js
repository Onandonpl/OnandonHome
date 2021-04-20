import React, { useEffect, useReducer, useContext, createContext } from "react";

import { useCollection } from "react-firebase-hooks/firestore";
import { homeDevicesReducer, initialState } from "reducer/homeDevicesReducer";

import { db } from "lib/firebase";

const HomeDevicesContext = createContext();
const HomeDevicesDispatchContext = createContext();

export const HomeDevicesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(homeDevicesReducer, initialState);
  const [value] = useCollection(db.collection("home"));

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
    <HomeDevicesDispatchContext.Provider value={dispatch}>
      <HomeDevicesContext.Provider value={state}>
        {children}
      </HomeDevicesContext.Provider>
    </HomeDevicesDispatchContext.Provider>
  );
};

export const useHomeDevices = () => {
  return useContext(HomeDevicesContext);
};
export const useDispatchHomeDevices = () => {
  return useContext(HomeDevicesDispatchContext);
};
