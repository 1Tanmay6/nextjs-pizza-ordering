import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import itemSlice from "./item-slice";

const store = configureStore({
  reducer: { item: itemSlice.reducer, cart: cartSlice.reducer },
});

export default store;
