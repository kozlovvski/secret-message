import "firebase/firestore";

import firebase from "firebase-instance";
import { mockStore } from "test/testUtils";
import { GenericSMessage } from "typings/secret-message";

import newMessage, {
  clearMessage,
  createMessage,
  createMessageCloud,
  createMessageError,
  createMessageRequest,
  createMessageSuccess,
} from "./new-message.slice";

jest.mock("./new-message.slice.ts", () => ({
  __esModule: true,
  ...jest.requireActual<Record<string, unknown>>("./new-message.slice.ts"),
  createMessageCloud: jest.fn(),
}));

describe("new message reducer", () => {
  it("should have a correct initial state", () => {
    expect(newMessage(undefined, {} as any)).toEqual({
      loading: false,
      success: false,
    });
  });

  it("should handle createMessageRequest", () => {
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
    beforeEach(() => {
      (createMessageCloud as jest.Mock).mockResolvedValue({
        data: {},
      });
    });
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

      await store.dispatch(createMessage({ message: 3 } as any));

      const actualActions = store.getActions().map((action) => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
