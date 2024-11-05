import { createSlice } from "@reduxjs/toolkit";
import { getAllApartments } from "../../dashboard/commendant";

export const apartmentSlice = createSlice({
  name: "apartment",
  initialState: {
    apartments: {
      data: [],
      status: null,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllApartments.pending, (state) => {
        state.apartments.status = "loading";
      })
      .addCase(getAllApartments.fulfilled, (state, action) => {
        state.apartments.status = "fullfilled";
        state.apartments.data = action.payload;
      })
      .addCase(getAllApartments.rejected, (state, action) => {
        state.apartments.status = "failed";
        state.apartments.error = action.payload;
      });
  },
});

// export const {} = requestSlice.actions;

export default apartmentSlice.reducer;
