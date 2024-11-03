import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
  async ({ id, userData }) => {
    try {
      const response = await toast.promise(
        instance.put(`User/${id}`, userData),
        {
          pending: "İstifadəçi məlumatları yenilənir.",
          success: "İstifadəçi məlumatları yeniləndi.",
        }
      );
      return response.data;
    } catch (error) {
      toast.error(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const registerUser = createAsyncThunk("user/registerUser", async (userData) => {
  try {
    const response = await toast.promise(
      instance.post("User/Register", userData),
      {
        pending: "İstifadəçi qeydiyyatdan keçirilir.",
        success: "Hesabınızı mail ünvanınıza göndərilən mesajla təsdiqləyin.",
      }
    );
    return response.data;
  } catch (error) {
    toast.error(error.response?.data || "Naməlum xəta baş verdi.");
  }
});

const loginUser = createAsyncThunk("user/loginUser", async (userData) => {
  try {
    const response = await toast.promise(
      instance.post("User/Login", userData),
      {
        pending: "İstifadəçi daxil olur.",
        success: "İstifadəçi daxil oldu.",
      }
    );
    return response.data;
  } catch (error) {
    toast.error(error.response?.data || "Naməlum xəta baş verdi.");
  }
});

const verifyUser = createAsyncThunk("user/verifyUser", async (token) => {
  try {
    const response = await toast.promise(
      instance.get(`User/verify?token=${token}`),
      {
        pending: "İstifadəçi təsdiqlənir.",
        success: "İstifadəçi təsdiqləndi.",
      }
    );
    return response.data;
  } catch (error) {
    toast.error(error.response?.data || "Naməlum xəta baş verdi.");
  }
});

const changeUserPassword = createAsyncThunk(
  "user/changeUserPassword",
  async (userData) => {
    try {
      const response = await toast.promise(
        instance.post("User/ResetPassword", userData),
        {
          pending: "İstifadəçi daxil olur.",
          success: "İstifadəçi daxil oldu.",
        }
      );
      return response.data;
    } catch (error) {
      toast.error(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const forgotUserPassword = createAsyncThunk(
  "user/forgotUserPassword",
  async (userData) => {
    try {
      const response = await toast.promise(
        instance.post("User/ForgotPassword", userData),
        {
          pending: "Email yoxlanılır.",
          success: "E-poçt qutunuza mail göndərildi.",
        }
      );
      return response.data;
    } catch (error) {
      toast.error(error.response?.data || "Naməlum xəta baş verdi.");
    }
  }
);

const resetUserPassword = createAsyncThunk(
  "user/resetUserPassword",
  async (userData) => {
    try {
      const response = await toast.promise(
        instance.post("User/ResetPassword", userData),
        {
          pending: "Token yoxlanılır.",
          success: "Şifrə uğurla dəyişdirildi.",
        }
      );
      return response.data;
    } catch (error) {
      toast.error(error.response?.data || "Naməlum xəta baş verdi.");
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
