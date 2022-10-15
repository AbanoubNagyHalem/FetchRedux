import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Redux/productsSlice";

export default configureStore({
  reducer: {
    products: productsSlice,
  },
});
