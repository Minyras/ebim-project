import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from ".";

const getAllPayments = createAsyncThunk("payment/getAllPayments", async () => {
  try {
    const response = await instance.get(`KamendantProfile/Payments`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const approvePayment = createAsyncThunk(
  "payment/approvePayment",
  async (paymentId, { rejectWithValue }) => {
    try {
      const response = await instance.put(
        `KamendantProfile/ApprovePayment/${paymentId}`
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const pendPayment = createAsyncThunk(
  "payment/pendPayment",
  async (paymentId, { rejectWithValue }) => {
    try {
      const response = await instance.put(
        `KamendantProfile/PendingPayment/${paymentId}`
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const denyPayment = createAsyncThunk(
  "payment/denyPayment",
  async (paymentId, { rejectWithValue }) => {
    try {
      const response = await instance.put(
        `KamendantProfile/DeniedPayment/${paymentId}`
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

export { getAllPayments, approvePayment, pendPayment, denyPayment };
