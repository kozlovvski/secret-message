import { ThunkAction } from "redux-thunk";

export type RootState = ReturnType<
  typeof import("../store/root-reducer").default
>;
export type AppDispatch = typeof import("../store/index").default["dispatch"];
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
