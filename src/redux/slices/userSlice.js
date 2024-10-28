import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const GetUserById = createAsyncThunk("user/getUserById", async (id) => {
  try {
    const response = await axios.get(
      `https://ebim-mtk-dashboard.azurewebsites.net/api/User/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const UpdateUserById = createAsyncThunk(
  "user/updateUserById",
  async ({ id, userData }) => {
    try {
      const response = await toast.promise(
        axios.put(
          `https://ebim-mtk-dashboard.azurewebsites.net/api/User/${id}`,
          userData
        ),
        {
          pending: "İstifadəçi məlumatları yenilənir.",
          success: "İstifadəçi məlumatları yeniləndi.",
          error: "İstifadəçi məlumatları yenilənən zaman problem yaşandı.",
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      mtk: "",
      blockNumber: "",
      floor: "",
      apartmentNumber: "",
      status: null,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetUserById.pending, (state) => {
        state.userInfo.status = "loading";
      })
      .addCase(GetUserById.fulfilled, (state, action) => {
        state.userInfo.status = "succeeded";
        state.userInfo = action.payload;
      })
      .addCase(GetUserById.rejected, (state, action) => {
        state.userInfo.status = "failed";
        state.userInfo.error = action.payload;
      })
      .addCase(UpdateUserById.pending, (state) => {
        state.userInfo.status = "loading";
      })
      .addCase(UpdateUserById.fulfilled, (state, action) => {
        state.userInfo.status = action.payload;
      })
      .addCase(UpdateUserById.rejected, (state, action) => {
        state.userInfo.status = action.payload;
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
