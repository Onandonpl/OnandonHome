import { handleAddItem } from "./homeDevicesActions";

export const homeDevicesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_ITEMS":
      return {
        itemList: payload.itemList,
        loading: false,
      };
    case "ADD_ITEM":
      handleAddItem(payload);
      return state;

    default:
      throw new Error(`Unknown action ${type}`);
  }
};

export const initialState = {
  itemList: [],
  loading: true,
};
