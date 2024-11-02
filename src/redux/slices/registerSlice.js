import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const postUser = createAsyncThunk("user/postUser", async (userData) => {
  try {
    const response = await toast.promise(
      axios.post(
        "https://ebim-mtk-dashboard.azurewebsites.net/api/User/Register",
        userData
      ),
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
export const registerSlice = createSlice({
  name: "register",
  initialState: {
    registerInfo: {
      name: "",
      surname: "",
      email: "",
      mtk: "",
      building: "",
      blockNumber: "",
      floor: "",
      apartmentNumber: "",
      ownerPhoneNumber: "",
      password: "",
      squareMeters: "",
      status: null,
      error: null,
    },
    registerError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postUser.pending, (state) => {
        state.registerInfo.status = "loading";
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.registerInfo.status = "succeeded";
        state.registerInfo = action.payload;
      })
      .addCase(postUser.rejected, (state, action) => {
        state.registerInfo.status = "failed";
        state.error = action.payload;
      });
  },
});

export const {} = registerSlice.actions;

export default registerSlice.reducer;
