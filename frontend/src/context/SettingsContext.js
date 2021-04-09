import React, { useEffect, useReducer, useContext, createContext } from "react";

import { useDocument } from "react-firebase-hooks/firestore";
import { settingsReducer, initialState } from "../reducer/settingsReducer";
import { db } from "../lib/firebase";

const SettingsContext = createContext();
const SettingsDispatchContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(settingsReducer, initialState());
  const [value] = useDocument(db.doc("settings/settings"));

  useEffect(() => {
    if (value) {
      const settings = value.data();
      dispatch({ type: "SET_SETTINGS", payload: settings });
    }
  }, [value]);

  return (
    <SettingsDispatchContext.Provider value={dispatch}>
      <SettingsContext.Provider value={state}>
        {children}
      </SettingsContext.Provider>
    </SettingsDispatchContext.Provider>
  );
};

export const useSettings = () => {
  return useContext(SettingsContext);
};
export const useDispatchSettings = () => {
  return useContext(SettingsDispatchContext);
};
