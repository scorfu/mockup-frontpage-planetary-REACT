import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../cartSlice/cart';

export const store = configureStore({
    reducer: {
      cart: cartReducer
    },
  });