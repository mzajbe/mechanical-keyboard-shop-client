// src/redux/productSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProduct } from '@/types';

export interface ProductState {
  items: TProduct[];
}

const initialState: ProductState = {
  items: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<TProduct[]>) => {
      state.items = action.payload;
    },
    // Additional reducers if needed
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
