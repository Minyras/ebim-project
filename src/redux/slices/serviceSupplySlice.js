import { createSlice } from "@reduxjs/toolkit";
import { getServiceSupplies } from "../../dashboard/serviceSupply";

export const serviceSupplySlice = createSlice({
  name: "serviceSupply",
  initialState: {
    allServiceSupplies: {
      data: [],
      status: null,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getServiceSupplies.pending, (state) => {
        state.allServiceSupplies.status = "loading";
        state.allServiceSupplies.error = null;
      })
      .addCase(getServiceSupplies.fulfilled, (state, action) => {
        state.allServiceSupplies.status = "fulfilled";
        state.allServiceSupplies.data = action.payload;
      })
      .addCase(getServiceSupplies.rejected, (state, action) => {
        state.allServiceSupplies.status = "failed";
        state.allServiceSupplies.error = action.payload;
      });
  },
});

export default serviceSupplySlice.reducer;
