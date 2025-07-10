import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state) {
      state.items.pop();
    },
    clearItem(state) {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;
