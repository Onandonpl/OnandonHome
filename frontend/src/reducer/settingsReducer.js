import { db } from "../lib/firebase";

const settings = {
  menu: true,
  longitude: 18.638306,
  latitude: 54.372158,
  loading: true,
};

const handleVisable = (data) => {
  db.collection("settings").doc("settings").update({ menu: data });
};
const handleLocalization = (data) => {
  db.collection("settings").doc("settings").update(data);
};
export const settingsReducer = (state, action) => {
  switch (action.type) {
    case "SET_SETTINGS":
      return { ...action.payload, loading: false };
    case "SET_VISABLE":
      handleVisable(action.payload.menu);
      return state;
    case "SET_LOCALIZATION":
      handleLocalization(action.payload);
      return state;
    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

export const initialState = () => {
  return settings;
};
