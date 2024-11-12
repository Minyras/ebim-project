import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../dashboard/user";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginInfo: {
      email: "",
      password: "",
      status: null,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginInfo.status = "loading";
        state.loginInfo.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginInfo = action.payload;
        state.loginInfo.status = "succeeded";
        state.loginInfo.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginInfo.status = "failed";
        state.loginInfo.error = action.payload;
      });
  },
});

export default loginSlice.reducer;
