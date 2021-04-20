import { handleAddItem, handleDeleteItem } from "./devicesActions";

export const devicesReducer = (state, action) => {
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

    case "DELETE_ITEM":
      handleDeleteItem(payload);
      return state;

    default:
      throw new Error(`Unknown action ${type}`);
  }
};

export const initialState = {
  itemList: [],
  loading: true,
};
