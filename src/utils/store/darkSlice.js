import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
  name: "dark",
  initialState: {
    dark: false,
  },
  reducers: {
    setDark: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { setDark } = darkSlice.actions;
export default darkSlice.reducer;