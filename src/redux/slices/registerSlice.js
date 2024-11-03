import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../../dashboard/user";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    registerInfo: {
      name: "",
      surname: "",
      email: "",
      mtk: "",
      building: "",
      blockNumber: "",
      floor: "",
      apartmentNumber: "",
      ownerPhoneNumber: "",
      password: "",
      squareMeters: "",
      status: null,
      error: null,
    },
    registerError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.registerInfo.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerInfo.status = "succeeded";
        state.registerInfo = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerInfo.status = "failed";
        state.error = action.payload;
      });
  },
});

// export const {} = registerSlice.actions;

export default registerSlice.reducer;
