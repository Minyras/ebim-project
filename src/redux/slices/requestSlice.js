import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const Request = createAsyncThunk("user/request", async (requestData) => {
  try {
    const response = await toast.promise(
      axios.post(
        "https://ebim-mtk-dashboard.azurewebsites.net/api/ApplicationRequests",
        requestData
      ),
      {
        pending: "Müraciət göndərilir.",
        success: "Müraciət göndərildi.",
        error: "Müraciət göndərilən zaman problem yaşandı.",
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const requestSlice = createSlice({
  name: "request",
  initialState: {
    requestInfo: {
      status: null,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Request.pending, (state) => {
        state.requestInfo.status = "loading";
      })
      .addCase(Request.fulfilled, (state, action) => {
        state.requestInfo.status = action.payload;
      })
      .addCase(Request.rejected, (state, action) => {
        state.requestInfo.status = "failed";
        state.requestInfo.error = action.payload;
      });
  },
});

export const {} = requestSlice.actions;

export default requestSlice.reducer;
