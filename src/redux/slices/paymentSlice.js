import { createSlice } from "@reduxjs/toolkit";
import { getLastPayments } from "../../dashboard/commendant";
import { approvePayment, getAllPayments } from "../../dashboard/payment";

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
      });
  },
});

// export const {} = requestSlice.actions;

export default paymentSlice.reducer;
