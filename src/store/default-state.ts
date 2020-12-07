import { RootState } from "typings/store";

const defaultState: RootState = {
  newMessage: {
    success: false,
    loading: false,
  },
  auth: {
    showScreen: false,
    authScreen: "signIn",
    signUp: {
      loading: false,
      success: false,
    },
    signIn: {
      loading: false,
      success: false,
    },
  },
};

export default defaultState;
