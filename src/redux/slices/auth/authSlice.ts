import { createSlice } from "@reduxjs/toolkit";
import { AuthSliceStateType } from "./authTypes";
import { RootState } from "../../store";

const initialState = {
  isAdminLoggedIn: false
} as AuthSliceStateType;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser(state){
      state.isAdminLoggedIn = true;
    },
    logoutUser(state){
      state.isAdminLoggedIn = false;
    },
  },
});

export const {
  loginUser,
  logoutUser
} = authSlice.actions;

export const selectIsAdminLoggedIn = (state: RootState) => state.auth.isAdminLoggedIn;

export default authSlice;
