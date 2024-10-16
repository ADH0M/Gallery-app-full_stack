import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { 
  products: null, 
  loading: false,
  error: null
};

export const getProducts = createAsyncThunk(
  'products/getProducts', 
  async (page) => {
    try {
      const res = await fetch(`http://localhost:4000/product?page=${page}`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.products = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.products = action.payload;
      state.currentPage = action.meta.arg; // Update currentPage based on the dispatched argument
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  }
});

export default productSlice.reducer;
