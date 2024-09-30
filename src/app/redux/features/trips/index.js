import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  trips: [],
};

const TripSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    setTrips: (state, action) => {
      state.trips = action.payload;
    },
    
  },
});

export const {
  setTrips,
} = TripSlice.actions;






export default TripSlice.reducer;
