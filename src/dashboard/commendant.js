import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from ".";

const notifyUsers = createAsyncThunk(
  "commendant/notifyUsers",
  async (message, { rejectWithValue }) => {
    try {
      const response = await instance.post(
        `KamendantProfile/Notification?message=${message}`
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const getAllApartments = createAsyncThunk(
  "commendant/getAllApartments",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get(`KamendantProfile/Apartments`);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const getLastPayments = createAsyncThunk(
  "commendant/getLastPayments",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get(`KamendantProfile/LastPayments`);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

export { notifyUsers, getAllApartments, getLastPayments };
