/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Bounce, toast } from "react-toastify";

export interface CartState {
  items: {
    product: TProduct;
    quantity: number;
  }[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.product._id === item._id);

      if (existingItem) {
        
        toast.warn("This product is already in the cart!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        state.items.push({
          product: item, quantity: 1,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.product._id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ _id: string; quantity: number }>
    ) => {
      const { _id, quantity } = action.payload;
      const item = state.items.find((i) => i.product._id === _id);

      if (item) {
        if (quantity <= item.product.availableQuantity) {
          item.quantity = quantity;
        }else{
          toast.error("Cannot exceed available stock!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
