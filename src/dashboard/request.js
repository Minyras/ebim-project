import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { instance } from ".";

const request = createAsyncThunk("user/request", async (requestData) => {
  try {
    const response = await toast.promise(
      instance.post("ApplicationRequests", requestData),
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

const getRequests = createAsyncThunk("user/getRequests", async (userId) => {
  try {
    const response = await instance.get(`ApplicationRequests?userId=${userId}`);
    return response.data;
  } catch (error) {
    toast.error(error.response?.data || "Naməlum xəta baş verdi.");
  }
});

export { request, getRequests };
