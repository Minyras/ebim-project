// import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { toast } from "react-toastify";

// export const Request = createAsyncThunk("user/request", async (requestData) => {
//   try {
//     const response = await toast.promise(
//       axios.post(
//         "https://ebim-mtk-dashboard.azurewebsites.net/api/ApplicationRequests",
//         requestData
//       ),
//       {
//         pending: "İstifadəçi daxil olur.",
//         success: "İstifadəçi daxil oldu.",
//         error: "Daxil olan zaman problem yaşandı.",
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const ChangeUserPassword = createAsyncThunk(
//   "user/changeUserPassword",
//   async (userData) => {
//     try {
//       const response = await toast.promise(
//         axios.post(
//           "https://ebim-mtk-dashboard.azurewebsites.net/api/User/ResetPassword",
//           userData
//         ),
//         {
//           pending: "İstifadəçi daxil olur.",
//           success: "İstifadəçi daxil oldu.",
//           error: "Daxil olan zaman problem yaşandı.",
//         }
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
// export const loginSlice = createSlice({
//   name: "login",
//   initialState: {
//     loginInfo: {
//       email: "",
//       password: "",
//       status: null,
//     },
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(LoginUser.pending, (state) => {
//         state.loginInfo.status = "loading";
//       })
//       .addCase(LoginUser.fulfilled, (state, action) => {
//         state.loginInfo.status = "succeeded";
//         state.loginInfo = action.payload;
//       })
//       .addCase(LoginUser.rejected, (state, action) => {
//         state.loginInfo.status = "failed";
//         state.error = action.payload;
//       });
//   },
// });

// export const {} = loginSlice.actions;

// export default loginSlice.reducer;
