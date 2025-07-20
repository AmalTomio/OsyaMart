// redux/action/store.js
import { configureStore } from "@reduxjs/toolkit";
import handleCart from "@/redux/reducer/handleCart"; // ✅ Correct path

const store = configureStore({
  reducer: {
    cart: handleCart, // ✅ You must assign a name here
  },
});

export default store;
