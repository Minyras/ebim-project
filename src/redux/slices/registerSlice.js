import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../../dashboard/user";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    registerInfo: {
      status: null,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.registerInfo.status = "loading";
        state.registerInfo.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.registerInfo.status = "succeeded";
        state.registerInfo.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerInfo.status = "failed";
        state.registerInfo.error = action.payload;
      });
  },
});

export default registerSlice.reducer;
