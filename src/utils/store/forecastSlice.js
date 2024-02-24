import { createSlice } from "@reduxjs/toolkit";

const forecastSlice = createSlice({
  name: "forecast",
  initialState: {
    forecast: null,
  },
  reducers: {
    setForecast: (state, action) => {
      state.forecast = action.payload;
    },
  },
});

export const { setForecast } = forecastSlice.actions;
export default forecastSlice.reducer;
