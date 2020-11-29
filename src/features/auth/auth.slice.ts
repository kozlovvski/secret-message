import "firebase/functions";

import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  showScreen: boolean;
  isLoggedIn: boolean;
  user?: unknown;
  error?: string;
};

const initialState: AuthState = {
  showScreen: false,
  isLoggedIn: false,
};

const newMessageSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    showAuthScreen(state) {
      state.showScreen = true;
    },
    hideAuthScreen(state) {
      state.showScreen = false;
    },
  },
});

export const { showAuthScreen, hideAuthScreen } = newMessageSlice.actions;

export default newMessageSlice.reducer;
