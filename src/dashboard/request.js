import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from ".";

const request = createAsyncThunk(
  "request/request",
  async (requestData, { rejectWithValue }) => {
    try {
      const response = await instance.post("ApplicationRequests", requestData);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const getRequests = createAsyncThunk("request/getRequests", async (userId) => {
  try {
    const response = await instance.get(`ApplicationRequests?userId=${userId}`);
    return response.data;
  } catch (error) {
    // console.error(error);
  }
});

const getAllRequests = createAsyncThunk("request/getAllRequests", async () => {
  try {
    const response = await instance.get(`KamendantProfile/ApplicationRequests`);
    return response.data;
  } catch (error) {
    // console.error(error);
  }
});

const getRequest = createAsyncThunk("request/getRequest", async (requestId) => {
  try {
    const response = await instance.get(
      `KamendantProfile/ApplicationRequests/${requestId}`
    );
    return response.data;
  } catch (error) {
    // console.error(error);
  }
});

const approveRequest = createAsyncThunk(
  "request/approveRequest",
  async (requestId, { rejectWithValue }) => {
    try {
      const response = await instance.put(
        `KamendantProfile/ApproveApplicationRequest/${requestId}`
      );

      return response.data;
    } catch (error) {
      rejectWithValue(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const denyRequest = createAsyncThunk(
  "request/denyRequest",
  async (requestId, { rejectWithValue }) => {
    try {
      const response = await instance.put(
        `KamendantProfile/DeniedApplicationRequest/${requestId}`
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const pendRequest = createAsyncThunk(
  "request/pendRequest",
  async (requestId, { rejectWithValue }) => {
    try {
      const response = await instance.put(
        `KamendantProfile/PendingApplicationRequest/${requestId}`
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

export {
  request,
  getRequests,
  getAllRequests,
  getRequest,
  approveRequest,
  denyRequest,
  pendRequest,
};
