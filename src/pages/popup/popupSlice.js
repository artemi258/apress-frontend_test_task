import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usehttp } from "../../hooks/http.hook";

export const fetchProduct = createAsyncThunk("product/fetchProduct", (id) => {
  const { request } = usehttp();
  return request(`/products/${id}`);
});

const initialState = {
  idProduct: null,
  product: null,
};

const popup = createSlice({
  name: "popup",
  initialState,
  reducers: {
    addIdProduct: (state, action) => {
      state.idProduct = action.payload;
    },
    clearProduct: (state) => {
      state.idProduct = null;
      state.product = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

const { reducer, actions } = popup;

export const { addIdProduct, clearProduct } = actions;
export default reducer;
