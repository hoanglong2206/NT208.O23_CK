import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";

const store = configureStore({
  reducer: {
    auth,
  },
});

export default store;
