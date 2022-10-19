import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    errorInLogin: (state, action) => {
      state.errorMessage = action.payload;
    },
    logout: (state, action) => {
      state.user = undefined;
    },
  },
});

export const { login, errorInLogin, logout } = authSlice.actions;
export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const CHECK_LOGIN = "CHECK_LOGIN";
export const REQUEST_SIGNOUT = "REQUEST_SIGNOUT";

export default authSlice.reducer;
