import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  trips: [],
  vehicle: [],
};

const TripSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    setTrips: (state, action) => {
      state.trips = action.payload;
    },
    setVehicles: (state, action) => {
      state.vehicle = action.payload;
    },
    
  },
});

export const {
  setTrips,
  setVehicles
} = TripSlice.actions;






export default TripSlice.reducer;
