import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async () => {
    const resp = await axios.get("https://fakestoreapi.com/products");
    return resp.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchProduct.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    [fetchProduct.pending]: (state, action) => {
      state.status = "Loading";
    },
    [fetchProduct.rejected]: (state, action) => {
      state.status = "Faild";
    },
  },
});

export default productsSlice.reducer;
