import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registerSlice from "../slices/registerSlice";
import storage from "redux-persist/lib/storage";
import loginSlice from "../slices/loginSlice";
import changePasswordSlice from "../slices/changePasswordSlice";
import userSlice from "../slices/userSlice";
import requestSlice from "../slices/requestSlice";
import apartmentSlice from "../slices/apartmentSlice";
import paymentSlice from "../slices/paymentSlice";
import serviceSupplySlice from "../slices/serviceSupplySlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};

const rootReducer = combineReducers({
  register: registerSlice,
  login: loginSlice,
  changePassword: changePasswordSlice,
  user: userSlice,
  request: requestSlice,
  apartment: apartmentSlice,
  payment: paymentSlice,
  serviceSupply: serviceSupplySlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
