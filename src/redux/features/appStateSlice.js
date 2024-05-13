import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appState: "",
  appStateDisplayText: "",
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setAppState: (state, action) => {
      state.appState = action.payload;
    },
    setAppStateDisplayText: (state, action) => {
      state.appStateDisplayText = action.payload;
    },
  },
});

export const { setAppState, setAppStateDisplayText } = appStateSlice.actions;

export default appStateSlice.reducer;
