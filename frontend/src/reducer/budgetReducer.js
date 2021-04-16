import { handleAddItem, handleDeleteItem } from "./budgetActions";

export const budgetReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_ITEMS":
      return {
        itemList: payload.itemList,
        filter: payload.itemList,
        budgetCategories: payload.budgetCategories,
        loading: false,
      };

    case "SHOW_ALL":
      return { ...state, filter: [...state.itemList] };

    case "FILTER_BY_DAY":
      return { ...state, filter: payload };

    case "FILTER_BY_MONTH":
      return { ...state, filter: payload };

    case "FILTER_BY_YEAR":
      return { ...state, filter: payload };

    case "ADD_ITEM":
      handleAddItem(payload);
      return state;

    case "DELETE_ITEM":
      handleDeleteItem(payload);
      return state;

    default:
      throw new Error(`Unknown action ${type}`);
  }
};

export const initialState = {
  itemList: [],
  filter: [],
  budgetCategories: [],
  loading: true,
};
