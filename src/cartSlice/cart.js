import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      const productId = action.payload;
      const itemToRemove = state.find(elem => elem.id === productId);
      state.splice(state.indexOf(itemToRemove), 1);
    }
  },
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;