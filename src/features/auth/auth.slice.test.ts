import "firebase/firestore";

import firebase from "firebase-instance";
import { mockStore } from "test/testUtils";
import { GenericSMessage } from "typings/secret-message";
import merge from "lodash/merge";

import auth, {
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
  signUpAction,
  signInAction,
} from "./auth.slice";
import defaultState from "store/default-state";

describe("auth reducer", () => {
  it("should have a correct initial state", () => {
    expect(auth(undefined, {} as any)).toEqual(defaultState.auth);
  });

  it("should handle showAuthScreen", () => {
    expect(auth(undefined, { type: showAuthScreen })).toEqual(
      merge({}, defaultState.auth, {
        showScreen: true,
      })
    );
  });

  it("should handle hideAuthScreen", () => {
    expect(auth(undefined, { type: hideAuthScreen })).toEqual(
      merge({}, defaultState.auth, {
        showScreen: false,
      })
    );
  });

  it("should handle changeAuthScreen", () => {
    expect(
      auth(undefined, { type: changeAuthScreen, payload: "signUp" })
    ).toEqual(
      merge({}, defaultState.auth, {
        authScreen: "signUp",
      })
    );
  });

  it("should handle logInUser", () => {
    expect(auth(undefined, { type: logInUser })).toEqual(
      merge({}, defaultState.auth, {
        isLoggedIn: true,
      })
    );
  });

  it("should handle logOutUser", () => {
    expect(auth(undefined, { type: logOutUser })).toEqual(
      merge({}, defaultState.auth, {
        isLoggedIn: false,
        authScreen: "signIn",
        signUp: {
          success: false,
        },
        signIn: {
          success: false,
        },
      })
    );
  });

  it("should handle signUpRequest", () => {
    expect(auth(undefined, { type: signUpRequest })).toEqual(
      merge({}, defaultState.auth, {
        signUp: {
          loading: true,
        },
      })
    );
  });

  it("should handle signUpSuccess", () => {
    expect(
      auth(undefined, {
        type: signUpSuccess,
      })
    ).toEqual(
      merge({}, defaultState.auth, {
        signUp: {
          success: true,
          loading: false,
        },
      })
    );
  });

  it("should handle signUpError", () => {
    expect(
      auth(undefined, {
        type: signUpError,
        payload: "some message",
      })
    ).toEqual(
      merge({}, defaultState.auth, {
        signUp: {
          success: false,
          loading: false,
          error: "some message",
        },
      })
    );
  });

  it("should handle signInRequest", () => {
    expect(auth(undefined, { type: signInRequest })).toEqual(
      merge({}, defaultState.auth, {
        signIn: {
          loading: true,
        },
      })
    );
  });

  it("should handle signInSuccess", () => {
    expect(
      auth(undefined, {
        type: signInSuccess,
      })
    ).toEqual(
      merge({}, defaultState.auth, {
        signIn: {
          success: true,
          loading: false,
        },
      })
    );
  });

  it("should handle signInError", () => {
    expect(
      auth(undefined, {
        type: signInError,
        payload: "some message",
      })
    ).toEqual(
      merge({}, defaultState.auth, {
        signIn: {
          success: false,
          loading: false,
          error: "some message",
        },
      })
    );
  });
});
