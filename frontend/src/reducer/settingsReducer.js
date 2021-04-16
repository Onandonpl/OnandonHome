import { handleChangeSetting, handleAddBudgetCategory } from "./settingsAction";

export const settingsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_SETTINGS":
      return { settings: payload, loading: false };
    case "SET_VISABLE":
      handleChangeSetting(payload);
      return state;
    case "SET_LOCALIZATION":
      handleChangeSetting(payload);
      return state;
    case "ADD_BUDGET_CATEGORY":
      handleAddBudgetCategory(payload);
      return state;
    default:
      throw new Error(`Unknown action ${type}`);
  }
};

const settings = {
  settings: {
    menu: true,
    localization: {
      longitude: 18.638306,
      latitude: 54.372158,
    },
  },
  loading: true,
};
export const initialState = () => {
  return settings;
};
