import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';
import filterReducer from './slice';
import cartReducer from './cartSlice'; // Import CartState

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    filters: filterReducer,
    cart: cartReducer, // No changes needed here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
