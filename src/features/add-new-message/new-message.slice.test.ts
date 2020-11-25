import { GenericSMessage } from "typings/secret-message";
import configureMockStore from "redux-mock-store";
import thunk, {
  ThunkAction,
  ThunkDispatch,
  ThunkMiddleware,
} from "redux-thunk";
import firebase from "firebase-instance";
import "firebase/firestore";
import newMessage, {
  createMessageRequest,
  createMessageSuccess,
  createMessageError,
  clearMessage,
  createMessage,
} from "./new-message.slice";
import { AppDispatch, AppThunk, RootState } from "typings/store";
import { AnyAction } from "redux";

const mockStore = configureMockStore<RootState, AppDispatch>([thunk]);

describe("new message reducer", () => {
  it("should have a correct initial state", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(newMessage(undefined, {} as any)).toEqual({
      loading: false,
      success: false,
    });
  });

  it("should handle createMessageRequest", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(newMessage(undefined, { type: createMessageRequest })).toEqual({
      loading: true,
      success: false,
    });
  });

  it("should handle createMessageSuccess", () => {
    expect(
      newMessage(undefined, {
        type: createMessageSuccess,
        payload: {
          id: "1",
          createdAt: new firebase.firestore.Timestamp(1000, 0),
        } as GenericSMessage,
      })
    ).toEqual({
      loading: false,
      success: true,
      message: {
        id: "1",
        createdAt: { nanoseconds: 0, seconds: 1000 },
      },
    });
  });

  it("should handle createMessageError", () => {
    expect(
      newMessage(undefined, {
        type: createMessageError,
        payload: "some message",
      })
    ).toEqual({
      loading: false,
      success: false,
      error: "some message",
    });
  });

  it("should handle clearMessage", () => {
    expect(
      newMessage(undefined, {
        type: clearMessage,
      })
    ).toEqual({
      loading: false,
      success: false,
      message: undefined,
    });
  });

  describe("createMessage thunk", () => {
    it("should dispatch expected actions on successful request", async () => {
      const store = mockStore({
        newMessage: {
          success: false,
          loading: false,
        },
      });
      const expectedActions = [
        createMessageRequest.type,
        createMessageSuccess.type,
      ];

      await store.dispatch(createMessage({ message: "test" }));

      const actualActions = store.getActions().map((action) => action.type);
      expect(actualActions).toEqual(expectedActions);
    });

    it("should dispatch expected actions on rejected request", async () => {
      const store = mockStore({
        newMessage: {
          success: false,
          loading: false,
        },
      });
      const expectedActions = [
        createMessageRequest.type,
        createMessageError.type,
      ];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await store.dispatch(createMessage({ message: 3 } as any));

      const actualActions = store.getActions().map((action) => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
