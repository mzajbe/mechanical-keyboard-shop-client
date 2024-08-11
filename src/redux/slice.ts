import { createSlice } from '@reduxjs/toolkit';

// Explicitly export the FilterState interface
export interface FilterState {
  searchTerm: string;
  priceRange: { min: number; max: number };
  sortOrder: 'asc' | 'desc' | null;
}

const initialState: FilterState = {
  searchTerm: '',
  priceRange: { min: 0, max: 1000 },
  sortOrder: null,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setPriceRange(state, action) {
      state.priceRange = action.payload;
    },
    setSortOrder(state, action) {
      state.sortOrder = action.payload;
    },
    clearFilters(state) {
      state.searchTerm = '';
      state.priceRange = { min: 0, max: 1000 };
      state.sortOrder = null;
    },
  },
});

export const { setSearchTerm, setPriceRange, setSortOrder, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
