import { applyMiddleware, createStore } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { RootAction, RootState } from "../typings/store";
import rootReducer from "./root-reducer";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const store = (initialState = {}) =>
  createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk as ThunkMiddleware<RootState, RootAction, undefined>)
  );

export default store;
