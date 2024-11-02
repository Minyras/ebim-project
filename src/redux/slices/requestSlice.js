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
      }
    );
    return response.data;
  } catch (error) {
    toast.error(error.response?.data || "Naməlum xəta baş verdi.");
  }
});

export const GetRequests = createAsyncThunk(
  "user/getRequests",
  async (userId) => {
    try {
      const response = await axios.get(
        `https://ebim-mtk-dashboard.azurewebsites.net/api/ApplicationRequests?userId=${userId}`
      );
      return response.data;
    } catch (error) {
      toast.error(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

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
      .addCase(Request.pending, (state) => {
        state.requestInfo.status = "loading";
      })
      .addCase(Request.fulfilled, (state, action) => {
        state.requestInfo.status = action.payload;
      })
      .addCase(Request.rejected, (state, action) => {
        state.requestInfo.status = "failed";
        state.requestInfo.error = action.payload;
      })
      .addCase(GetRequests.pending, (state) => {
        state.requests.status = "loading";
      })
      .addCase(GetRequests.fulfilled, (state, action) => {
        state.requests.status = "fullfilled";
        state.requests.data = action.payload;
      })
      .addCase(GetRequests.rejected, (state, action) => {
        state.requests.status = "failed";
        state.requests.error = action.payload;
      });
  },
});

export const {} = requestSlice.actions;

export default requestSlice.reducer;
