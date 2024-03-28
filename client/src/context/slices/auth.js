import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token") || "")
    : "",
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : {
        _id: "",
        name: "",
        email: "",
        photo: "",
        role: "",
        id: "",
      },
  timeExpire: localStorage.getItem("timeExpire")
    ? JSON.parse(localStorage.getItem("timeExpire") || "")
    : 0,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const newState = {
        token: action.payload.token,
        user: action.payload.user,
        timeExpire: action.payload.timeExpire,
      };

      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem(
        "timeExpire",
        JSON.stringify(action.payload.timeExpire)
      );

      return newState;
    },
    logout: (state) => {
      const newState = {
        token: "",
        user: {
          _id: "",
          name: "",
          email: "",
          photo: "",
          role: "",
          id: "",
        },
        timeExpire: 0,
      };

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("timeExpire");

      return newState;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
