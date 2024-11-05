import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { instance } from ".";

const request = createAsyncThunk("request/request", async (requestData) => {
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

const getRequests = createAsyncThunk("request/getRequests", async (userId) => {
  try {
    const response = await instance.get(`ApplicationRequests?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const getAllRequests = createAsyncThunk("request/getAllRequests", async () => {
  try {
    const response = await instance.get(`KamendantProfile/ApplicationRequests`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const getRequest = createAsyncThunk("request/getRequest", async (requestId) => {
  try {
    const response = await instance.get(
      `KamendantProfile/ApplicationRequests/${requestId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const approveRequest = createAsyncThunk(
  "request/approveRequest",
  async (requestId) => {
    try {
      const response = await toast.promise(
        instance.put(`KamendantProfile/ApproveApplicationRequest/${requestId}`),
        {
          pending: "Müraciət təsdiqlənir...",
          success: "Müraciət təsdiqləndi.",
        }
      );

      return response.data;
    } catch (error) {
      toast.error(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const denyRequest = createAsyncThunk(
  "request/denyRequest",
  async (requestId) => {
    try {
      const response = await toast.promise(
        instance.put(`KamendantProfile/DeniedApplicationRequest/${requestId}`),
        {
          pending: "Müraciət rədd olunur...",
          success: "Müraciət rədd olundu.",
        }
      );
      return response.data;
    } catch (error) {
      toast.error(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const pendRequest = createAsyncThunk(
  "request/pendRequest",
  async (requestId) => {
    try {
      const response = await toast.promise(
        instance.put(`KamendantProfile/PendingApplicationRequest/${requestId}`),
        {
          pending: "Müraciət gözlədilir...",
          success: "Müraciət gözlədilir.",
        }
      );
      return response.data;
    } catch (error) {
      toast.error(error.response?.data || "Naməlum xəta baş verdi.");
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
