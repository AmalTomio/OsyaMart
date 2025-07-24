// redux/action/store.js
import { configureStore } from "@reduxjs/toolkit";
import handleCart from "@/redux/reducer/handleCart";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) return undefined;
    return { cart: JSON.parse(serializedState) };
  } catch (err) {
    console.warn("Failed to load state:", err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart);
    localStorage.setItem("cartState", serializedState);
  } catch (err) {
    console.warn("Failed to save state:", err);
  }
};

const store = configureStore({
  reducer: {
    cart: handleCart,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
