import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from ".";
import { toast } from "react-toastify";

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
  async (paymentId) => {
    try {
      const response = await toast.promise(
        instance.put(`KamendantProfile/ApprovePayment/${paymentId}`),
        {
          pending: "Ödəniş təsdiqlənir...",
          success: "Ödəniş təsdiqləndi.",
        }
      );
      return response.data;
    } catch (error) {
      toast.error(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const pendPayment = createAsyncThunk(
  "payment/pendPayment",
  async (paymentId) => {
    try {
      const response = await toast.promise(
        instance.put(`KamendantProfile/PendingPayment/${paymentId}`),
        {
          pending: "Ödəniş gözlədilir...",
          success: "Ödəniş gözlədilir.",
        }
      );
      return response.data;
    } catch (error) {
      toast.error(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const denyPayment = createAsyncThunk(
  "payment/denyPayment",
  async (paymentId) => {
    try {
      const response = await toast.promise(
        instance.put(`KamendantProfile/DeniedPayment/${paymentId}`),
        {
          pending: "Ödəniş rədd olunur...",
          success: "Ödəniş rədd olundu.",
        }
      );
      return response.data;
    } catch (error) {
      toast.error(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

export { getAllPayments, approvePayment, pendPayment, denyPayment };
