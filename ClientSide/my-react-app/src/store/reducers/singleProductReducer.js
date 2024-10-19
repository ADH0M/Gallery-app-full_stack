// product reducer .
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { 
  product: null, 
  loading: false,
  error: null
};


export const getProductById = createAsyncThunk(
    'product/getProductById', 
    async (id) => {
      try {
        const res = await fetch(`http://localhost:4000/product/${id}`);
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  );
  



const singleProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get product  
    builder.addCase(getProductById.pending, (state) => {
      state.loading = true;
      state.product = null;
    });
    builder.addCase(getProductById.fulfilled, (state , action) => {
      state.loading = false;
      state.error = null;
      state.product = action.payload;
    });
    builder.addCase(getProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

  }
});

export default singleProductSlice.reducer;

