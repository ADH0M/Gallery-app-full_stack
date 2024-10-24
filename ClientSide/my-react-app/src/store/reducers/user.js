// user reducer
import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const token = localStorage.getItem('token');
const email = localStorage.getItem('userEmail');

const initialState = {
  userData: [],
  loading: false,
  error: null,
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async () => {
    try {
        const res =await axios.get(`http://localhost:4000/user?email=${email}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        });      
      const data = await res.data;
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

const userSlice = createSlice({
  name: "searchProduct",
  initialState,
  reducers: {
    logOut: (state) => {
        localStorage.removeItem('userEmail');
        localStorage.removeItem('token');
        state.userData = [];
      },
    logIn: (state,action) => {
        state.userData =[action.payload] ;
      }
  },

  extraReducers: (builder) => {
    // get user data.
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
      state.userData = null;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.userData = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const {logOut ,logIn} = userSlice.actions;

export default userSlice.reducer;
