import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  visits: [],
};

const VisitSlice = createSlice({
  name: "visitors",
  initialState,
  reducers: {
    setVisitors: (state, action) => {
      state.visits = action.payload;
    },
    
  },
});

export const {
  setVisitors,
} = VisitSlice.actions;






export default VisitSlice.reducer;
