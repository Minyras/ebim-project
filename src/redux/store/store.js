import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "../slices/registerSlice";
import loginSlice from "../slices/loginSlice";
import changePasswordSlice from "../slices/changePasswordSlice";

export default configureStore({
  reducer: {
    register: registerSlice,
    login: loginSlice,
    changePassword: changePasswordSlice,
  },
});
