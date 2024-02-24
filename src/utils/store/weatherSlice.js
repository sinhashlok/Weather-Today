import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    location: {
      city: null,
      country: null,
      lat: null,
      lon: null,
    },
    weather: null,
    main: null,
    sys: null,
    aqi: null,
  },
  reducers: {
    setLocation: (state, action) => {
      const { city, country } = action.payload;
      state.location.city = city;
      state.location.country = country;
    },
    setCoords: (state, action) => {
      const { lat, lon } = action.payload;
      state.location.lat = lat;
      state.location.lon = lon;
    },
    setWeather: (state, action) => {
      const { weather, main, sys } = action.payload;
      state.weather = weather;
      state.main = main;
      state.sys = sys;
    },
    setAqi: (state, action) => {
      state.aqi = action.payload;
    },
  },
});

export const { setLocation, setCoords, setWeather, setAqi } =
  weatherSlice.actions;
export default weatherSlice.reducer;
