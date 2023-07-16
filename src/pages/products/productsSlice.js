import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usehttp } from "../../hooks/http.hook";

export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
  const { request } = usehttp();
  return request("/products");
});

const initialState = {
  products: [],
  filteredProducts: [],
  notFound: false,
};

const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    addFilteredProducts: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.filteredProducts = action.payload;
      } else {
        state.filteredProducts = action.payload.filteredProducts;
        state.notFound = action.payload.notFound;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

const { reducer, actions } = products;
export const { addFilteredProducts } = actions;

export default reducer;
