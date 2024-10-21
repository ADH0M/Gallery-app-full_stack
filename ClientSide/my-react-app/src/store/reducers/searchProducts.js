// searchProductSlice reducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  loading: true,
  error: null,
};

export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (pro) => {
    try {
      const res = await fetch(`http://localhost:4000/product?name=${pro}&limit=${100}`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

const searchProductSlice = createSlice({
  name: "searchProduct",
  initialState,
  reducers: {
    clearProducts: (state) => {
        state.searchPro = [];
      },
  },
  extraReducers: (builder) => {
    // get all products
    builder.addCase(searchProducts.pending, (state) => {
      state.loading = true;
      state.searchPro = null;
    });
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.searchPro = action.payload;
      state.currentPage = action.meta.arg; // Update currentPage based on the dispatched argument
    });
    builder.addCase(searchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const {clearProducts} = searchProductSlice.actions;

export default searchProductSlice.reducer;
