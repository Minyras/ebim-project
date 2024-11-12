import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from ".";

const getServiceSupplies = createAsyncThunk(
  "serviceSupply/getServiceSupply",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("ServiceSupply");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

export { getServiceSupplies };
