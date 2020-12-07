import "firebase/auth";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";
import firebase from "firebase-instance";
import { AppThunk } from "typings/store";
import { SignInPayload, SignUpPayload, ValidAuthscreen } from "typings/user";
import defaultState from "store/default-state";

type AuthState = {
  showScreen: boolean;
  isLoggedIn?: boolean;
  error?: string;
  authScreen: ValidAuthscreen;
  signUp: {
    loading: boolean;
    success: boolean;
    error?: string;
  };
  signIn: {
    loading: boolean;
    success: boolean;
    error?: string;
  };
};

const initialState: AuthState = defaultState.auth;

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
    changeAuthScreen(state, action: PayloadAction<AuthState["authScreen"]>) {
      state.authScreen = action.payload;
    },
    signUpRequest(state) {
      state.signUp.loading = true;
    },
    signUpSuccess(state) {
      state.signUp.success = true;
      state.signUp.loading = false;
    },
    signUpError(state, action: PayloadAction<string>) {
      state.signUp.error = action.payload;
      state.signUp.success = false;
      state.signUp.loading = false;
    },
    signInRequest(state) {
      state.signIn.loading = true;
    },
    signInSuccess(state) {
      state.signIn.success = true;
      state.signIn.loading = false;
    },
    signInError(state, action: PayloadAction<string>) {
      state.signIn.error = action.payload;
      state.signIn.success = false;
      state.signIn.loading = false;
    },
    logInUser(state) {
      state.isLoggedIn = true;
    },
    logOutUser(state) {
      state.isLoggedIn = false;
      state.authScreen = "signIn";
      state.signUp.success = false;
      state.signIn.success = false;
    },
  },
});

export const {
  showAuthScreen,
  hideAuthScreen,
  changeAuthScreen,
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  logInUser,
  logOutUser,
} = newMessageSlice.actions;

export const signUpAction = ({
  email,
  password,
  displayName,
}: SignUpPayload): AppThunk => async (dispatch) => {
  dispatch(signUpRequest());
  try {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (user) {
      dispatch(signUpSuccess());
      // user is saved in store in useAuthStateChanged
      // dispatch(logInUser(user));
      dispatch(hideAuthScreen());
      user.updateProfile({
        displayName,
      });
      message.success(`Welcome on board, ${displayName}!`);
    }
  } catch (err) {
    dispatch(signUpError(err.message));
    message.error(err.message);
  }
};

export const signInAction = ({
  email,
  password,
}: SignInPayload): AppThunk => async (dispatch) => {
  dispatch(signInRequest());
  try {
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    if (user) {
      dispatch(signInSuccess());
      // user is saved in store in useAuthStateChanged
      // dispatch(logInUser(user));
      dispatch(hideAuthScreen());
      message.success(`Welcome back, ${user.displayName}`);
    }
  } catch (err) {
    dispatch(signInError(err.message));
    message.error(err.message);
  }
};

export default newMessageSlice.reducer;
