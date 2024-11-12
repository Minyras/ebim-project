import { createSlice } from "@reduxjs/toolkit";
import {
  request,
  getRequests,
  getAllRequests,
  getRequest,
  approveRequest,
  denyRequest,
  pendRequest,
} from "../../dashboard/request";

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
    allRequests: {
      data: [],
      status: null,
      error: null,
    },
    request: {
      apartmentNumber: "",
      requestType: "",
      message: " ",
      createdAt: "",
      status: "",
      requestStatus: null,
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
      })
      .addCase(getAllRequests.pending, (state) => {
        state.allRequests.status = "loading";
      })
      .addCase(getAllRequests.fulfilled, (state, action) => {
        state.allRequests.status = "fullfilled";
        state.allRequests.data = action.payload;
      })
      .addCase(getAllRequests.rejected, (state, action) => {
        state.allRequests.status = "failed";
        state.allRequests.error = action.payload;
      })
      .addCase(getRequest.pending, (state) => {
        state.request.requestStatus = "loading";
      })
      .addCase(getRequest.fulfilled, (state, action) => {
        state.request.requestStatus = "fullfilled";
        state.request = action.payload;
      })
      .addCase(getRequest.rejected, (state, action) => {
        state.request.requestStatus = "failed";
        state.request.error = action.payload;
      })
      .addCase(approveRequest.pending, (state) => {
        state.request.requestStatus = "loading";
      })
      .addCase(approveRequest.fulfilled, (state) => {
        state.request.requestStatus = "fullfilled";
        state.request.status = "Approved";
      })
      .addCase(approveRequest.rejected, (state, action) => {
        state.request.requestStatus = "failed";
        state.request.error = action.payload;
      })
      .addCase(denyRequest.pending, (state) => {
        state.request.requestStatus = "loading";
      })
      .addCase(denyRequest.fulfilled, (state) => {
        state.request.requestStatus = "fullfilled";
        state.request.status = "Denied";
      })
      .addCase(denyRequest.rejected, (state, action) => {
        state.request.requestStatus = "failed";
        state.request.error = action.payload;
      })
      .addCase(pendRequest.pending, (state) => {
        state.request.requestStatus = "loading";
      })
      .addCase(pendRequest.fulfilled, (state) => {
        state.request.requestStatus = "fullfilled";
        state.request.status = "Pending";
      })
      .addCase(pendRequest.rejected, (state, action) => {
        state.request.requestStatus = "failed";
        state.request.error = action.payload;
      });
  },
});

export default requestSlice.reducer;
