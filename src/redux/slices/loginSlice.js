import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../dashboard/user";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginInfo: {
      status: null,
      error: null,
      token: null,
      userId: null,
      role: null,
    },
  },
  reducers: {
    logout: (state) => {
      state.loginInfo = {
        token: null,
        userId: null,
        role: null,
        status: null,
        error: null,
      };
    },
    clearError: (state) => {
      state.loginInfo.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginInfo.status = "loading";
        state.loginInfo.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginInfo = {
          ...action.payload,
          status: "fulfilled",
          error: null,
        };
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginInfo.status = "failed";
        state.loginInfo.error = action.payload;
      });
  },
});

export const { logout, clearError } = loginSlice.actions;
export default loginSlice.reducer;
