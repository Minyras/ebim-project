import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "../slices/registerSlice";
import loginSlice from "../slices/loginSlice";
import changePasswordSlice from "../slices/changePasswordSlice";
import userSlice from "../slices/userSlice";
import requestSlice from "../slices/requestSlice";
import apartmentSlice from "../slices/apartmentSlice";
import paymentSlice from "../slices/paymentSlice";

export default configureStore({
  reducer: {
    register: registerSlice,
    login: loginSlice,
    changePassword: changePasswordSlice,
    user: userSlice,
    request: requestSlice,
    apartment: apartmentSlice,
    payment: paymentSlice,
  },
});
