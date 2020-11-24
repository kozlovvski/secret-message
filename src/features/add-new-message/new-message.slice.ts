import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateSMessagePayload, GenericSMessage } from "typings/secret-message";
import { AppThunk } from "typings/store";
import firebase from "firebase-instance";
import "firebase/functions";

export const createMessageCloud = firebase
  .functions()
  .httpsCallable("createMessage");

type NewMessageState = {
  loading: boolean;
  success: boolean;
  message?: GenericSMessage;
  error?: string;
};

const initialState: NewMessageState = {
  success: false,
  loading: false,
};

const newMessageSlice = createSlice({
  name: "new-message",
  initialState,
  reducers: {
    createMessageRequest(state) {
      state.loading = true;
    },
    createMessageSuccess(state, action: PayloadAction<GenericSMessage>) {
      state.message = action.payload;
      state.success = true;
      state.loading = false;
    },
    createMessageError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.success = false;
      state.loading = false;
    },
    clearMessage(state) {
      state.message = undefined;
      state.success = false;
      state.loading = false;
    },
  },
});

export const {
  createMessageRequest,
  createMessageSuccess,
  createMessageError,
  clearMessage,
} = newMessageSlice.actions;

export const createMessage = ({
  message,
}: CreateSMessagePayload): AppThunk => async (dispatch) => {
  dispatch(createMessageRequest());
  try {
    const newMessage: GenericSMessage = await createMessageCloud({
      message,
    }).then((res) => res.data);
    dispatch(createMessageSuccess(newMessage));
  } catch (err) {
    dispatch(createMessageError(err));
  }
};

export default newMessageSlice.reducer;
