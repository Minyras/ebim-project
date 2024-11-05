import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { instance } from ".";

const notifyUsers = createAsyncThunk(
  "commendant/notufyUsers",
  async (message) => {
    try {
      const response = await toast.promise(
        instance.post(`KamendantProfile/Notification?message=${message}`),
        {
          pending: "Bildiriş göndərilir...",
          success: "Bildiriş göndərildi.",
        }
      );
      return response.data;
    } catch (error) {
      toast.error(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const getAllApartments = createAsyncThunk(
  "commendant/getAllApartments",
  async () => {
    try {
      const response = await instance.get(`KamendantProfile/Apartments`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const getLastPayments = createAsyncThunk(
  "commendant/getLastPayments",
  async () => {
    try {
      const response = await instance.get(`KamendantProfile/LastPayments`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export { notifyUsers, getAllApartments, getLastPayments };
