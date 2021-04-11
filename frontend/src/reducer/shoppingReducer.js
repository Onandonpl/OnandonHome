import {
  handleAddItem,
  handleDeleteItem,
  handleQtyItem,
} from "./shoppingActions";

export const shoppingReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_SHOPPING":
      return { shoppingList: payload, loading: false };
    case "ADD_ITEM":
      handleAddItem(payload);
      return state;
    case "INCREASE_ITEM":
      handleQtyItem(payload);
      return state;
    case "DECREASE_ITEM":
      handleQtyItem(payload);
      return state;
    case "DELETE_ITEM":
      handleDeleteItem(payload);
      return state;
    default:
      throw new Error(`Unknown action ${type}`);
  }
};

const shopping = { shoppingList: [], loading: true };

export const initialState = () => {
  return shopping;
};
