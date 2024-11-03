import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../dashboard/user";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginInfo: {
      email: "",
      password: "",
      status: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        // state.loginInfo.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        // state.loginInfo.status = "succeeded";
        state.loginInfo = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        // state.loginInfo.status = "failed";
        state.error = action.payload;
      });
  },
});

export const {} = loginSlice.actions;

export default loginSlice.reducer;
