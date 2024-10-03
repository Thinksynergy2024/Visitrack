import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  trips: [],
  vehicles: [],
};

const TripSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    setTrips: (state, action) => {
      state.trips = action.payload;
    },
    setVehicles: (state, action) => {
      state.vehicles = action.payload;
    },
    
  },
});

export const {
  setTrips,
  setVehicles
} = TripSlice.actions;






export default TripSlice.reducer;
