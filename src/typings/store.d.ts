import { StateType, ActionType } from "typesafe-actions";

export type Store = StateType<typeof import("../store/index").default>;
export type RootState = StateType<
  ReturnType<typeof import("../store/root-reducer").default>
>;
export type RootAction = ActionType<
  typeof import("../store/root-action").default
>;
