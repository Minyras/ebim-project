import { createSlice } from "@reduxjs/toolkit";
import { getUserById, updateUserById } from "../../dashboard/user";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      mtk: "",
      blockNumber: "",
      floor: "",
      apartmentNumber: "",
      status: null,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.userInfo.status = "loading";
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.userInfo.status = "succeeded";
        state.userInfo = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.userInfo.status = "failed";
        state.userInfo.error = action.payload;
      })
      .addCase(updateUserById.pending, (state) => {
        state.userInfo.status = "loading";
      })
      .addCase(updateUserById.fulfilled, (state, action) => {
        state.userInfo.status = action.payload;
      })
      .addCase(updateUserById.rejected, (state, action) => {
        state.userInfo.status = action.payload;
      });
  },
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
