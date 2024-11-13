import { createSlice } from "@reduxjs/toolkit";
import { getLastPayments } from "../../dashboard/commendant";
import {
  getAllPayments,
  getCurrentPayment,
  getPaymentHistory,
} from "../../dashboard/payment";

const sortPaymentsByStatus = (payments) => {
  const sorted = {
    pending: [],
    approved: [],
    denied: [],
  };
  payments.forEach((payment) => {
    if (payment.status == "Approved") {
      sorted.approved.push(payment);
    } else if (payment.status == "Pending") {
      sorted.pending.push(payment);
    } else if (payment.status == "Denied") {
      sorted.denied.push(payment);
    }
  });
  return sorted;
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    lastPayments: {
      data: [],
      status: null,
      error: null,
    },
    allPayments: {
      all: [],
      sortedPayments: {},
      status: null,
      error: null,
    },
    currentPayment: {
      currentPayment: 0,
      error: null,
      status: null,
    },
    paymentHistory: {
      all: [],
      status: null,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLastPayments.pending, (state) => {
        state.lastPayments.status = "loading";
      })
      .addCase(getLastPayments.fulfilled, (state, action) => {
        state.lastPayments.status = "fullfilled";
        state.lastPayments.data = action.payload;
      })
      .addCase(getLastPayments.rejected, (state, action) => {
        state.lastPayments.status = "failed";
        state.lastPayments.error = action.payload;
      })
      .addCase(getAllPayments.pending, (state) => {
        state.allPayments.status = "loading";
      })
      .addCase(getAllPayments.fulfilled, (state, action) => {
        state.allPayments.status = "fullfilled";
        state.allPayments.all = action.payload;
        state.allPayments.sortedPayments = sortPaymentsByStatus(action.payload);
      })
      .addCase(getAllPayments.rejected, (state, action) => {
        state.allPayments.status = "failed";
        state.allPayments.error = action.payload;
      })
      .addCase(getCurrentPayment.pending, (state) => {
        state.currentPayment.status = "loading";
      })
      .addCase(getCurrentPayment.fulfilled, (state, action) => {
        state.currentPayment.status = "fullfilled";
        state.currentPayment.currentPayment = action.payload.currentPayment;
      })
      .addCase(getCurrentPayment.rejected, (state, action) => {
        state.currentPayment.status = "failed";
        state.currentPayment.error = action.payload;
      })
      .addCase(getPaymentHistory.pending, (state) => {
        state.paymentHistory.status = "loading";
      })
      .addCase(getPaymentHistory.fulfilled, (state, action) => {
        state.paymentHistory.status = "fullfilled";
        state.paymentHistory.all = action.payload;
      })
      .addCase(getPaymentHistory.rejected, (state, action) => {
        state.paymentHistory.status = "failed";
        state.paymentHistory.error = action.payload;
      });
  },
});

export default paymentSlice.reducer;
