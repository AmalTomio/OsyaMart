// src/ReduxProvider.jsx
"use client";

import { Provider } from "react-redux";
import store from "@/redux/action/store";

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
