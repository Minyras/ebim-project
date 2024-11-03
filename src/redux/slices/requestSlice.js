import { createSlice } from "@reduxjs/toolkit";
import { request, getRequests } from "../../dashboard/request";

export const requestSlice = createSlice({
  name: "request",
  initialState: {
    requestInfo: {
      status: null,
      error: null,
    },
    requests: {
      data: [],
      status: null,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(request.pending, (state) => {
        state.requestInfo.status = "loading";
      })
      .addCase(request.fulfilled, (state, action) => {
        state.requestInfo.status = action.payload;
      })
      .addCase(request.rejected, (state, action) => {
        state.requestInfo.status = "failed";
        state.requestInfo.error = action.payload;
      })
      .addCase(getRequests.pending, (state) => {
        state.requests.status = "loading";
      })
      .addCase(getRequests.fulfilled, (state, action) => {
        state.requests.status = "fullfilled";
        state.requests.data = action.payload;
      })
      .addCase(getRequests.rejected, (state, action) => {
        state.requests.status = "failed";
        state.requests.error = action.payload;
      });
  },
});

// export const {} = requestSlice.actions;

export default requestSlice.reducer;
