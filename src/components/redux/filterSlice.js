import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const LIMIT = 10;
const START_PAGE = 1;

const filtersInitialState = {
  status: statusFilters.all,
  query: '',
  page: START_PAGE,
  limit: LIMIT,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
    setQuery(state, action) {
      return { ...state, query: action.payload };
    },
    setPage(state, action) {
      return { ...state, page: action.payload };
    },
  },
});

export const { setStatusFilter, setQuery, setPage } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
