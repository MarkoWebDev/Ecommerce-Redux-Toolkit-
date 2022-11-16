import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/slices/sliderSlice";
import productsReducer from "../features/slices/productsSlice";

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productsReducer,
  },
});
