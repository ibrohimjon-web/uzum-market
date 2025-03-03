import { configureStore } from "@reduxjs/toolkit";
import likeSlice from "./likeSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    likes: likeSlice,
    carts: cartSlice,
  },
});
