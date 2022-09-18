import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../../models/responses/ICategoryResponse"
import { fetchCategories } from "./ActionCreator";

type CategoryState = {
  categories: ICategory[];
  isLoading: boolean;
  error?: string;
}

const initialState: CategoryState = {
  categories: [],
  isLoading: false,
  error: undefined,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // without thunks
    //
    // categoryFetching(state) {
    //   state.isLoading = true;
    // },
    // categoryFetchingSuccess(state, actions: PayloadAction<ICategory[]>) {
    //   state.isLoading = false;
    //   state.error = undefined;
    //   state.categories = actions.payload;
    // },
    // categoryFetchingError(state, actions: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = actions.payload;
    // },
  },
  extraReducers: {
    [fetchCategories.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCategories.fulfilled.type]: (state, actions: PayloadAction<ICategory[]>) => {
      state.isLoading = false;
      state.error = undefined;
      state.categories = actions.payload;
    },
    [fetchCategories.rejected.type]: (state, actions: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = actions.payload;
    },
  }
});

export default categorySlice.reducer;
