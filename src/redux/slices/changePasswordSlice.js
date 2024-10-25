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
          error: "Belə email ilə istifadəçi qeydiyyatdan keçməyib.",
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const changePasswordSlice = createSlice({
  name: "changePassword",
  initialState: {
    changePasswordInfo: {
      email: "",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ChangeUserPassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ChangeUserPassword.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loginInfo = action.payload;
      })
      .addCase(ChangeUserPassword.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const {} = changePasswordSlice.actions;

export default changePasswordSlice.reducer;
