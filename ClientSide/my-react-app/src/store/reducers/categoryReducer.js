// category reducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  categories: null,
  loading: true,
  error: null,
};

export const getcategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    try {
      const res = await fetch(`http://localhost:4000/category`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

const categoriesSlice = createSlice({
  name: "searchProduct",
  initialState,
  reducers: {
    clearProducts: (state) => {
        state.searchPro = [];
      },
  },
  extraReducers: (builder) => {
    // get all products
    builder.addCase(getcategories.pending, (state) => {
      state.loading = true;
      state.categories = null;
    });
    builder.addCase(getcategories.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.categories = action.payload;
    });
    builder.addCase(getcategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const {clearProducts} = categoriesSlice.actions;

export default categoriesSlice.reducer;
