import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const ChangeUserPassword = createAsyncThunk(
  "user/changePassword",
  async (userData) => {
    try {
      const response = await toast.promise(
        axios.post(
          "https://ebim-mtk-dashboard.azurewebsites.net/api/User/ForgotPassword",
          userData
        ),
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

export const ResetUserPassword = createAsyncThunk(
  "user/resetPassword",
  async (userData) => {
    try {
      const response = await toast.promise(
        axios.post(
          "https://ebim-mtk-dashboard.azurewebsites.net/api/User/ResetPassword",
          userData
        ),
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

export const changePasswordSlice = createSlice({
  name: "changePassword",
  initialState: {
    changePasswordInfo: {
      email: "",
      status: null,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ChangeUserPassword.pending, (state) => {
        state.changePasswordInfo.status = "loading";
      })
      .addCase(ChangeUserPassword.fulfilled, (state, action) => {
        state.changePasswordInfo.status = action.payload;
      })
      .addCase(ChangeUserPassword.rejected, (state, action) => {
        state.changePasswordInfo.status = "failed";
        state.error = action.payload;
      });
  },
});

export const {} = changePasswordSlice.actions;

export default changePasswordSlice.reducer;
