import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  item: {
    toppings: [],
  },
  totalQuantity: 0,
  changed: false,
};
const itemSlice = createSlice({
  name: "item",
  initialState: intialState,
  reducers: {
    replaceItem(state) {
      state.item = intialState.item;
      state.totalQuantity = intialState.totalQuantity;
    },
    addPropsToItem(state, action) {
      switch (action.payload.type) {
        case "PIZZA":
          state.item.pizza = action.payload.item;
          break;
        case "BASE":
          state.item.base = action.payload.item;
          break;
        case "SAUCE":
          state.item.sauce = action.payload.item;
          break;
        case "CHEESE":
          state.item.cheese = action.payload.item;
          break;
        case "TOPPINGS":
          state.item.toppings.push(action.payload.item);
          break;
        default:
          break;
      }
    },
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice;
