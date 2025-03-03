import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("cart")) || [],
  },

  reducers: {
    incCart(state, { payload }) {
      console.log(payload);

      let index = state.value.findIndex((el) => el.id === payload.id);
      console.log(index);
      if (index < 0) {
        state.value = [...state.value, { ...payload, quantity: 1 }];
      } else {
        state.value = state.value.map((item, inx) => {
          if (inx === index) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
      toast.success("Savatga qoshildi Hoshim😘💕");
    },

    decCart(state, { payload }) {
      let index = state.value.findIndex((el) => el.id === payload.id);
      state.value = state.value.map((item, inx) =>
        index === inx ? { ...item, quantity: item.quantity - 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeCart(state, { payload }) {
      state.value = state.value.filter((item) => item.id !== payload.id);

      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeAllCart(state) {
      state.value = [];

      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },
});

export const { incCart, decCart, removeCart, removeAllCart } =
  cartSlice.actions;
export default cartSlice.reducer;
