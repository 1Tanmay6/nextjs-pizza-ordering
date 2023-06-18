import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    total: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      state.totalQuantity++;
      state.items.push(action.payload.item);
    },
    doTotal(state, action) {
      state.total += action.payload.total;
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.total = 0;
    },

    // removeItemFromCart(state, action) {
    //   const id = action.payload.id;
    //   const existingItem = state.items.find((item) => item.id === id);
    //   state.totalQuantity--;
    //   state.changed = true;
    //   if (existingItem.quantity === 1) {
    //     state.items = state.items.filter((item) => item.id !== id);
    //   } else {
    //     existingItem.quantity--;
    //     existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
    //   }
    // },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
