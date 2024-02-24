import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import forecastReducer from "./forecastSlice";
import darkReducer from "./darkSlice";

const appStore = configureStore({
  reducer: {
    weather: weatherReducer,
    forecast: forecastReducer,
    dark: darkReducer,
  },
});

export default appStore;
