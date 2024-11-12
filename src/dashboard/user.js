import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from ".";

const getUserById = createAsyncThunk("user/getUserById", async (id) => {
  try {
    const response = await instance.get(`User/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const updateUserById = createAsyncThunk(
  "user/updateUserById",
  async ({ id, userData }, { rejectWithValue }) => {
    try {
      const response = await instance.put(`User/${id}`, userData);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await instance.post("/User/Register", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await instance.post("User/Login", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const verifyUser = createAsyncThunk(
  "user/verifyUser",
  async (token, { rejectWithValue }) => {
    try {
      const response = await instance.get(`User/verify?token=${token}`);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const changeUserPassword = createAsyncThunk(
  "user/changeUserPassword",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await instance.post("User/ResetPassword", userData);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const forgotUserPassword = createAsyncThunk(
  "user/forgotUserPassword",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await instance.post("User/ForgotPassword", userData);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const resetUserPassword = createAsyncThunk(
  "user/resetUserPassword",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await instance.post("User/ResetPassword", userData);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

export {
  getUserById,
  updateUserById,
  registerUser,
  loginUser,
  verifyUser,
  changeUserPassword,
  forgotUserPassword,
  resetUserPassword,
};
