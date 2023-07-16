import { configureStore } from "@reduxjs/toolkit";
import products from "../pages/products/productsSlice";
import popup from "../pages/popup/popupSlice";

export const store = configureStore({
  reducer: { products, popup },
  middleware: (geetDefaultMiddleware) => geetDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
