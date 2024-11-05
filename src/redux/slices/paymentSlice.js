import { createSlice } from "@reduxjs/toolkit";
import { getLastPayments } from "../../dashboard/commendant";

export const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    lastPayments: {
      data: [],
      status: null,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLastPayments.pending, (state) => {
        state.lastPayments.status = "loading";
      })
      .addCase(getLastPayments.fulfilled, (state, action) => {
        state.lastPayments.status = "fullfilled";
        state.lastPayments.data = action.payload;
      })
      .addCase(getLastPayments.rejected, (state, action) => {
        state.lastPayments.status = "failed";
        state.lastPayments.error = action.payload;
      });
  },
});

// export const {} = requestSlice.actions;

export default paymentSlice.reducer;
