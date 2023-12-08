import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart") ?? '{"cartItems": []}');

const addDecimals = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2)
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x: any) => x._id === item._id)

      if (existItem) {
        state.cartItems = state.cartItems.map((x: any) => x._id === existItem._id ? item : x)
      } else {
        state.cartItems = [...state.cartItems, item]
      }

      //Caculate items price
      state.itemsPrice = addDecimals(state.cartItems.reduce((acc: any, item: any) => acc + item.price * item.qty, 0))
    }
  }
})

export default cartSlice.reducer