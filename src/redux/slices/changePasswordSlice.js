import { createSlice } from "@reduxjs/toolkit";

export const changePasswordSlice = createSlice({
  name: "changePassword",
  initialState: {
    changePasswordInfo: {
      email: "",
      status: null,
      error: null,
    },
  },
  reducers: {},
});

// export const {} = changePasswordSlice.actions;

export default changePasswordSlice.reducer;
